from fastapi import HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from models import Category
from .base import BaseCrud


class CategoryCRUD(BaseCrud[Category]):
    def __init__(self, session: AsyncSession) -> None:
        super().__init__(model=Category, session=session)

    async def get_by_name(self, name: str) -> Category | None:
        category = await self.get_by(field="name", value=name)
        if not category:
            return None
        return category

    async def create_category(self, user_id: int, data: dict[str, any]) -> Category:
        exist = await self.get_by_name(name=data["name"])
        if exist:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Category with name '{data['name']}' already exists"

            )
        data["created_by"] = user_id
        data["updated_by"] = user_id

        try:
            return await self.create(data)
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Failed to create category: {e}",
            )

    async def update_category(self, category_id: int, data: dict[str, any]) -> Category:
        exist = await self.get_by_id(category_id)
        if  not exist:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Category with name '{data['name']}' does not exist"
            )

        return await self.(category_id, data)

