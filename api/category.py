from fastapi import APIRouter, Depends, HTTPException, status

from crud import UserCrud
from crud.category import CategoryCRUD
from dependencies.authentication import AuthenticationRequired
from dependencies.get_user import get_current_user
from dependencies.models import get_categories_crud
from models import User
from schemas.category import CategoryCreate, CategoryUpdate


router: APIRouter = APIRouter(dependencies=[Depends(AuthenticationRequired)])


@router.get("/{category_id}")
async def get_by_id(category_id: int, crud: CategoryCRUD = Depends(get_categories_crud)):
    category = await crud.get_by_id(category_id)
    if not category:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Category not found")
    return category

@router.post("/")
async def create_category(data: CategoryCreate, crud: CategoryCRUD = Depends(get_categories_crud), user: User = Depends(get_current_user)):
    return await crud.create_category(user_id=user.id, data=data.model_dump(exclude_none=True))

@router.put("/{category_id}")
async def update_category(data: CategoryUpdate, crud: CategoryCRUD = Depends(get_categories_crud), user: User = Depends(get_current_user)):
    ...