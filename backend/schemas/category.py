from pydantic import BaseModel, Field


class CategoryBase(BaseModel):
    name: str = Field(..., examples=["Fashion"])
    description: str | None = Field(
        None,
        examples=["Clothing, accessories, and footwear for men, women, and children."],
    )


class CategoryCreate(CategoryBase):
    pass


class CategoryUpdate(CategoryBase):
    name: str | None = Field(None, examples=["Books"])
    description: str | None = Field(
        None, examples=["Wide range of books across different genres and languages."]
    )


class CategoryResponse(CategoryBase):
    id: int = Field(..., examples=[1, 2])
