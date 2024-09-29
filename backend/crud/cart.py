from fastapi import HTTPException, status
from sqlalchemy import desc, select
from sqlalchemy.ext.asyncio import AsyncSession

from crud.base import BaseCrud
from models.cart import Cart
from utils.cart_status import Status


class CartCRUD(BaseCrud[Cart]):
    def __init__(self, session: AsyncSession) -> None:
        super().__init__(model=Cart, session=session)

    async def get_by_cart_id(self, cart_id: int):
        cart = await self.get_by_id(cart_id)
        if not cart:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Cart not found",
            )
        return cart

    async def get_all_carts(self):
        carts = await self.get_all()
        if not carts:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="No cart found",
            )
        return carts

    async def get_cart_by_user_id(self, user_id: int):
        query = (
            select(self.model)
            .where(self.model.created_by == user_id)
            .order_by(desc(self.model.created_at))
        )
        result = await self.session.scalars(query)
        cart = result.first()

        if not cart:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"No cart found for user with ID: {user_id}",
            )

        return cart

    async def create_cart(self, user_id: int):
        return await self.create({"created_by": user_id, "updated_by": user_id})

    async def update_cart(self, user_id: int):
        cart = await self.get_by("created_by", user_id)
        if cart.status == Status.closed:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"The cart with ID: {cart.id} is closed",
            )

        return await self.update(
            cart.id, {"updated_by": user_id, "status": Status.closed}
        )

    async def delete_cart(self, cart_id: int):
        deleted = await self.delete(cart_id)
        if deleted:
            return True
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Error in deleted cart: {cart_id}",
        )
