from pydantic import BaseModel, EmailStr, Field


class RegisterUser(BaseModel):
    name: str = Field(..., min_length=3, max_length=50, examples=["John Doe"])
    email: EmailStr
    password: str = Field(..., min_length=8, max_length=30, examples=["password123"])
