from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from db import Base
from models.mixins import TimestampMixin


class Users(Base, TimestampMixin):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(255), nullable=True)
    email: Mapped[str] = mapped_column(String(255), unique=True)
    password: Mapped[str] = mapped_column(String(255))

    def __repr__(self):
        return f"{self.name} ({self.id})"

    def __str__(self):
        return self.__repr__()
