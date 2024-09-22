from sqlalchemy import Float, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from db import Base
from models.mixins import TimestampMixin, UserStampMixin


class Product(Base, TimestampMixin, UserStampMixin):
    __tablename__ = "product"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(255))
    description: Mapped[str] = mapped_column(String(255))
    price: Mapped[float] = mapped_column(Float)
    stock_quantity: Mapped[int] = mapped_column(Integer, default=0)
    category_id: Mapped[int] = mapped_column(Integer, ForeignKey("category.id"))

    def __repr__(self):
        return f"Product: {self.id} - {self.name} - {self.stock_quantity}"

    def __str__(self):
        return self.__repr__()
