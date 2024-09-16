from fastapi import APIRouter, Depends, HTTPException, status

from crud import UserCrud
from dependencies.models import get_user_crud
from schemas.token import Token
from schemas.users import LoginUser, RegisterUser
from utils.jwt_handler import encode_token

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
