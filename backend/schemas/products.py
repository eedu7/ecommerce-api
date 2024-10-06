from pydantic import BaseModel, Field

from schemas.category import CategoryResponse


class ProductBase(BaseModel):
    name: str = Field(..., examples=["SmartWatch Pro X"])
    description: str = Field(..., examples=["A sleek and stylish smartwatch"])
    price: float = Field(..., examples=[199.99])
    stock_quantity: int = Field(..., examples=[150])
    category_id: int = Field(..., examples=[1])


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


class ProductResponse(BaseModel):
    id: int = Field(..., examples=[1])
    name: str = Field(..., examples=["SmartWatch Pro X"])
    description: str = Field(..., examples=["A sleek and stylish smartwatch"])
    price: float = Field(..., examples=[199.99])
    stock_quantity: int = Field(..., examples=[150])
    category: CategoryResponse = Field(
        ...,
        examples=[
            {"id": 1, "name": "Electronics", "description": "Devices and gadgets"}
        ],
    )
