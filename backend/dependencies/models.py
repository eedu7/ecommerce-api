from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

from crud.cart import CartCRUD
from crud.cart_item import CartItemCRUD
from crud.category import CategoryCRUD
from crud.users import UserCrud
from db import get_async_session


def get_user_crud(session: AsyncSession = Depends(get_async_session)):
    return UserCrud(session=session)


def get_categories_crud(session: AsyncSession = Depends(get_async_session)):
    return CategoryCRUD(session=session)


def get_cart_crud(session: AsyncSession = Depends(get_async_session)):
    return CartCRUD(session=session)


def get_cart_item_crud(session: AsyncSession = Depends(get_async_session)):
    return CartItemCRUD(session=session)
