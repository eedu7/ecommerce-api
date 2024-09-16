from fastapi import HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from models import Users
from schemas.token import Token
from utils.jwt_handler import encode_token
from utils.password_handler import get_password_hash, verify_password

from .base import BaseCrud


def _create_token(user_id) -> Token:
    payload = {
        "user_id": user_id,
    }
    access_token, exp = encode_token(payload)
    payload["token-type"] = "refresh-token"
    refresh_token, exp = encode_token(payload)
    return Token(
        access_token=access_token,
        refresh_token=refresh_token,
        exp=exp,
    )


class UserCrud(BaseCrud[Users]):
    def __init__(self, session: AsyncSession):
        super().__init__(model=Users, session=session)

    async def get_by_email(self, email: str) -> Users | None:
        user = await self.get_by(field="email", value=email)
        if not user:
            return None
        return user

    async def register_user(self, user_data: dict[str, any]):
        user = await self.get_by_email(user_data["email"])
        if user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="User already registered",
            )
        user_data["password"] = get_password_hash(user_data["password"])

        new_user = await self.create(user_data)
        if not new_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST, detail="Error creating user"
            )
        return new_user

    async def login_user(self, email: str, password: str) -> Token:
        user = await self.get_by_email(email)
        if not user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="User does not exist",
            )
        if not verify_password(password, user.password):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid credentials",
            )
        return _create_token(user.id)
