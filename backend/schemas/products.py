from pydantic import BaseModel


class ProductBase(BaseModel):
    name: str
    description: str
    price: float
    stock_quantity: int
    category_id: int


class ProductCreate(ProductBase):
    pass


class ProductUpdate(ProductBase):
    pass


class ProductPartialUpdate(BaseModel):
    name: str | None = None
    description: str | None = None
    price: float | None = None
    stock_quantity: int | None = None
    category_id: int | None = None
