from pydantic import BaseModel, Field


class CategoryBase(BaseModel):
    name: str = Field(..., examples=["T-Shirt"])
    description: str | None = Field(None, examples=["Some description"])


class CategoryCreate(CategoryBase):
    pass


class CategoryUpdate(CategoryBase):
    name: str | None = Field(None, examples=["Name"])
    description: str | None = Field(None, examples=["Some description"])


class CategoryResponse(CategoryBase):
    id: int = Field(..., examples=[1, 2])
