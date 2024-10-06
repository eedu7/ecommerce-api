from fastapi import HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from crud.base import BaseCrud
from models import CartItem


class CartItemCRUD(BaseCrud[CartItem]):
    def __init__(self, session: AsyncSession) -> None:
        super().__init__(model=CartItem, session=session)

    async def get_cart_item_by_id(self, cart_item_id: int) -> CartItem:
        try:
            return await self.get_by_id(cart_item_id)
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Error on fetching cart item with id {cart_item_id}",
            )

    async def create_cart_item(
        self, cart_id: int, product_id: int, user_id: int, quantity: int = 1
    ) -> CartItem:
        cart_item = await self.create(
            {
                "cart_id": cart_id,
                "product_id": product_id,
                "created_by": user_id,
                "quantity": quantity,
            }
        )
        return cart_item

    async def get_all_by_user(self, user_id: int) -> list[CartItem]:
        try:
            data = await self.get_all_by(field="created_by", value=user_id)
            if not data:
                raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND,
                    detail=f"User does not have any cart items",
                )
            return data

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Error on fetching all cart items.",
            )

    async def delete_cart_item(self, cart_item_id) -> bool:
        deleted = await self.delete(cart_item_id)
        if not deleted:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, detail="Item does not exist"
            )
        return True

    async def update_cart_item(
        self, cart_item_id: int, attributes: dict[str, any]
    ) -> CartItem:
        try:
            return await self.update(cart_item_id, attributes)
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Error updating cart item: {e}",
            )
