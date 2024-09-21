from sqlalchemy import ForeignKey, Integer
from sqlalchemy.ext.declarative import declared_attr
from sqlalchemy.orm import mapped_column


class UserStampMixin:
    @declared_attr
    def created_by(cls):
        return mapped_column(Integer, ForeignKey('users.id'))

    @declared_attr
    def updated_by(cls):
        return mapped_column(Integer, ForeignKey('users.id'))
