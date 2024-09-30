from pydantic import BaseModel


class PaymentCreate(BaseModel):
    cart_id: int
    amount: float
