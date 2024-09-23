from sqlalchemy import ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column

from db import Base
from models.mixins import TimestampMixin


class Cart(Base, TimestampMixin):
    __tablename__ = "cart"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    user_id: Mapped[int] = mapped_column(
        Integer, ForeignKey("users.id"), nullable=False
    )


class CartItem(Base, TimestampMixin):
    __tablename__ = "cart_item"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    user_id: Mapped[int] = mapped_column(
        Integer, ForeignKey("users.id"), nullable=False
    )
    cart_id: Mapped[int] = mapped_column(Integer, ForeignKey("cart.id"), nullable=False)
    product_id: Mapped[int] = mapped_column(
        Integer, ForeignKey("product.id"), nullable=False
    )
    quantity: Mapped[int] = mapped_column(
        Integer, ForeignKey("quantity.id"), nullable=False
    )
    price: Mapped[float] = mapped_column(
        Integer, ForeignKey("price.id"), nullable=False
    )
