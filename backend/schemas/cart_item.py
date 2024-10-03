from pydantic import BaseModel


class CartItem(BaseModel):
    product_id: int
    cart_id: int
    quantity: int


class CartItemCreate(CartItem):
    pass


class CartItemUpdate(BaseModel):
    quantity: int
