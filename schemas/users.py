from pydantic import BaseModel, EmailStr, Field

class UserBase(BaseModel):
    email: EmailStr = Field(..., examples=["john.doe@example", "<EMAIL>"])




class RegisterUser(UserBase):
    name: str = Field(..., min_length=3, max_length=50, examples=["John Doe"])
    password: str = Field(..., min_length=8, max_length=30, examples=["password123"])


class LoginUser(UserBase):
    password: str = Field(..., min_length=8, max_length=30, examples=["password123"])


class UserRead(UserBase):
    id: int = Field(..., examples=[1, 2])
    name: str = Field(..., min_length=3, max_length=50, examples=["John Doe"])
    is_active: bool = Field(..., examples=[True, False])
