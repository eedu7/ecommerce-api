from pydantic import BaseModel, Field


class CurrentUser(BaseModel):
    id: int | None = Field(None)
