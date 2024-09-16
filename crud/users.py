from fastapi import HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from models import Users
from utils.password_handler import get_password_hash

from .base import BaseCrud


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

        new_user = await self.create(**user_data)
        if not new_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST, detail="Error creating user"
            )
        return new_user
