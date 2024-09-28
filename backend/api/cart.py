from fastapi import APIRouter, Depends

from crud.cart import CartCRUD
from dependencies.authentication import AuthenticationRequired
from dependencies.get_user import get_current_user
from dependencies.models import get_cart_crud
from models import User

router = APIRouter(dependencies=[Depends(AuthenticationRequired)])


@router.get("/")
async def get_all_carts(cart_crud: CartCRUD = Depends(get_cart_crud)):
    return await cart_crud.get_all_carts()


@router.get("/{cart_id}")
async def get_cart(cart_id: int, cart_crud: CartCRUD = Depends(get_cart_crud)):
    return await cart_crud.get_by_cart_id(cart_id)


@router.get("/users/")
async def get_by_user_id(cart_crud: CartCRUD = Depends(get_cart_crud), user: User = Depends(get_current_user)):
    return await cart_crud.get_cart_by_user_id(user_id=user.id)


@router.post("/")
async def create_cart(user: User = Depends(get_current_user), cart_crud: CartCRUD = Depends(get_cart_crud)):
    return await cart_crud.create_cart(user_id=user.id)


@router.put("/")
async def update_cart(user: User = Depends(get_current_user), cart_crud: CartCRUD = Depends(get_cart_crud)):
    return await cart_crud.update_cart(user_id=user.id)


@router.delete("/{cart_id}")
async def delete_cart(cart_id: int, cart_crud: CartCRUD = Depends(get_cart_crud)):
    return await cart_crud.delete_cart(cart_id=cart_id)
