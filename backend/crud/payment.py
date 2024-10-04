from typing import Any

from fastapi import HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from crud.base import BaseCrud
from models import Payment


class PaymentCRUD(BaseCrud[Payment]):
    def __init__(self, session: AsyncSession) -> None:
        super().__init__(Payment, session)

    async def get_payment_by_id(self, payment_id: int) -> Payment:
        try:
            payment = await self.get_by_id(payment_id)
            if payment:
                return payment

            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Payment not found",
            )
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Error on fetching payment by id {payment_id}",
            )

    async def get_all_by_user(self, user_id: int):
        try:
            data = await self.get_all_by(field="created_by", value=user_id)
            if not data:
                raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND,
                    detail="User payment not found",
                )
            return data
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Error on fetching user payment data.",
            )

    async def create_payment(self, attributes: dict[str, Any]):
        try:
            payment = await self.create(attributes)
            return payment
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Error on creating payment data.",
            )

    async def delete_payment(self, payment_id: int):
        try:
            payment = await self.delete(payment_id)
            if not payment:
                raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND,
                    detail="Payment not found",
                )
            return {"message": "Payment deleted"}
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Error on deleting payment data.",
            )
