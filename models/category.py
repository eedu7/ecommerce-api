from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from . import Base
from .mixins import TimestampMixin, UserStampMixin


class Category(Base, TimestampMixin, UserStampMixin):
    __tablename__ = 'category'

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String, index=True, unique=True, nullable=False)
    description: Mapped[str] = mapped_column(String, nullable=True)

    def __repr__(self) -> str:
        return f'<Category: {self.id}, {self.name}>'
