from fastapi import APIRouter, Depends, HTTPException, status

from crud import UserCrud
from dependencies.models import get_user_crud
from schemas.users import RegisterUser

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
