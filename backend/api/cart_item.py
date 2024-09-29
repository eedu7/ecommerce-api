from fastapi import APIRouter, Depends

from crud.cart_item import CartItemCRUD
from dependencies.authentication import AuthenticationRequired
from dependencies.get_user import get_current_user
from dependencies.models import get_cart_item_crud
from models import User
from schemas.cart_item import CartItemCreate

router = APIRouter(dependencies=[Depends(AuthenticationRequired)])


@router.get("/")
async def get_all():
    return {"message": "Hello World"}


@router.post("/")
async def create_cart(
    cart_item: CartItemCreate,
    user: User = Depends(get_current_user),
    cart_item_crud: CartItemCRUD = Depends(get_cart_item_crud),
):
    data = cart_item.model_dump()
    data["created_by"] = user.id
    return await cart_item_crud.create(data)
