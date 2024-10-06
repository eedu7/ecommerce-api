from sqlalchemy import DECIMAL, ForeignKey, Integer, Enum
from sqlalchemy.orm import Mapped, mapped_column

from db import Base
from models.mixins import TimestampMixin, UserStampMixin
from schemas.payment import PaymentStatus


class Payment(Base, UserStampMixin, TimestampMixin):
    __tablename__ = "payment"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    cart_id: Mapped[int] = mapped_column(Integer, ForeignKey("cart.id"), nullable=False)
    amount: Mapped[float] = mapped_column(DECIMAL, nullable=False)
    staus: Mapped[
        PaymentStatus] = mapped_column(Enum(PaymentStatus), nullable=False)
