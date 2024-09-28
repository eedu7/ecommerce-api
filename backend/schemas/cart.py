from pydantic import BaseModel


class CartBase(BaseModel):
    user_id: str


class CartCreate(CartBase):
    pass
