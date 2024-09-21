from fastapi import APIRouter, Depends, HTTPException, Request, status

from crud import UserCrud
from dependencies.authentication import AuthenticationRequired
from dependencies.get_user import get_current_user
from dependencies.models import get_user_crud
from schemas.token import Token
from schemas.users import LoginUser, RegisterUser

router = APIRouter()


@router.get("/")
async def get_users(
    skip: int = 0, limit: int = 20, crud: UserCrud = Depends(get_user_crud)
):
    users = await crud.get_all(skip=skip, limit=limit)

    if not users:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="No users found"
        )
    return users


@router.post("/")
async def register(data: RegisterUser, crud: UserCrud = Depends(get_user_crud)):
    return await crud.register_user(data.model_dump())


@router.post("/login")
async def login(data: LoginUser, crud: UserCrud = Depends(get_user_crud)) -> Token:
    return await crud.login_user(email=data.email, password=data.password)


@router.get("/me", dependencies=[Depends(AuthenticationRequired)])
async def me(user: UserCrud = Depends(get_current_user)):
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    return user
