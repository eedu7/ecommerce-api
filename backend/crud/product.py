from typing import Any

from fastapi import HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from crud.base import BaseCrud
from models import Product


class ProductCRUD(BaseCrud[Product]):
    def __init__(self, session: AsyncSession) -> None:
        super().__init__(model=Product, session=session)

    async def get_all_products(self, skip: int = 0, limit: int = 100):
        try:
            products = await self.get_all(skip=skip, limit=limit)
            if not products:
                raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND,
                    detail="No products found",
                )
            return products
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=str(e),
            )

    async def get_product_by_id(self, product_id: int):
        try:
            product = await self.get_by_id(product_id)

            if not product:
                raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND,
                    detail="Product not found",
                )
            return product
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Error on fetching the product: {e}",
            )

    async def create_product(self, attributes: dict[str, Any]) -> Product:
        try:
            product = await self.create(attributes)
            return product
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Error on creating product: {e}",
            )

    async def read_product(self, product_id: int) -> Product:
        try:
            product = await self.get_by_id(product_id)
            if not product:
                raise HTTPException(
                    status_code=status.HTTP_404_NOT_FOUND,
                    detail="Product not found",

                )
            return product
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Error on reading product: {e}",
            )

    async def update_product(
            self, product_id: int, attributes: dict[str, Any]
    ) -> Product:
        try:
            updated_product = await self.update(product_id, attributes)
            return updated_product
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Error on updating product: {e}",
            )

    async def delete_product(self, product_id: int) -> bool:
        try:
            deleted = await self.get_by_id(product_id)
            if deleted:
                return True
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Error on deleting product: {product_id}",
            )
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Error on deleting product: {e}",
            )
