from typing import List

from fastapi import APIRouter, Depends, HTTPException, Request, status

from crud import UserCrud
from dependencies.authentication import AuthenticationRequired
from dependencies.get_user import get_current_user
from dependencies.models import get_user_crud
from models import User
from schemas.token import Token
from schemas.users import LoginUser, RegisterUser, UserProfileData, UserRead

router = APIRouter()


@router.get("/", response_model=List[UserRead])
async def get_users(
    skip: int = 0, limit: int = 20, crud: UserCrud = Depends(get_user_crud)
) -> List[User]:
    users = await crud.get_all(skip=skip, limit=limit)

    if not users:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="No users found"
        )
    return users


@router.post("/", response_model=UserRead)
async def register(data: RegisterUser, crud: UserCrud = Depends(get_user_crud)) -> User:
    return await crud.register_user(data.model_dump())


@router.post("/login", response_model=Token)
async def login(data: LoginUser, crud: UserCrud = Depends(get_user_crud)) -> Token:
    return await crud.login_user(email=data.email, password=data.password)


@router.get(
    "/me",
    dependencies=[Depends(AuthenticationRequired)],
    response_model=UserProfileData,
)
async def me(user: UserCrud = Depends(get_current_user)) -> User:
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    return user
