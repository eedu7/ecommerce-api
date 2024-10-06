from enum import StrEnum

from pydantic import BaseModel


class PaymentStatus(StrEnum):
    SUCCESS = "success"
    PENDING = "pending"
    FAILED = "failed"
    PROCESSING = "processing"


class PaymentCreate(BaseModel):
    cart_id: int
    amount: float
    status: PaymentStatus = PaymentStatus.PENDING
