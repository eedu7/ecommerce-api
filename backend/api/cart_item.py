from fastapi import APIRouter, Depends

from crud.cart_item import CartItemCRUD
from dependencies.authentication import AuthenticationRequired
from dependencies.get_user import get_current_user
from dependencies.models import get_cart_item_crud
from models import User
from schemas.cart_item import CartItemCreate, CartItemUpdate

router = APIRouter(dependencies=[Depends(AuthenticationRequired)])


@router.get("/")
async def get_all(user: User = Depends(get_current_user), cart_item_crud: CartItemCRUD = Depends(get_cart_item_crud)):
    return await cart_item_crud.get_all_by_user(user.id)


@router.post("/")
async def create_cart(
        cart_item: CartItemCreate,
        user: User = Depends(get_current_user),
        cart_item_crud: CartItemCRUD = Depends(get_cart_item_crud),
):
    data = cart_item.model_dump()
    data["created_by"] = user.id
    return await cart_item_crud.create(data)


@router.post("/{cart_item_id}")
async def update_cart(cart_item_id: int, quantity: CartItemUpdate,
                      cart_item_crud: CartItemCRUD = Depends(get_cart_item_crud)):
    return await cart_item_crud.update_cart_item(cart_item_id, quantity.model_dump())


@router.delete("/{cart_item_id}")
async def delete_cart(cart_item_id: int, cart_item_crud: CartItemCRUD = Depends(get_cart_item_crud)):
    return await cart_item_crud.delete_cart_item(cart_item_id)
