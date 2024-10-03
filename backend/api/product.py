from fastapi import APIRouter, Depends

from crud.product import ProductCRUD
from dependencies.authentication import AuthenticationRequired
from dependencies.get_user import get_current_user
from dependencies.models import get_product_crud
from models import User
from schemas.products import ProductCreate, ProductUpdate, ProductPartialUpdate

router = APIRouter()


@router.get("/")
async def get_all_products(skip: int = 0, limit: int = 100, product_crud: ProductCRUD = Depends(get_product_crud)):
    return await product_crud.get_all_products(skip=skip, limit=limit)


@router.post("/", dependencies=[Depends(AuthenticationRequired)])
async def create_product(product: ProductCreate, user: User = Depends(get_current_user),
                         product_crud: ProductCRUD = Depends(get_product_crud)):
    data = product.model_dump()
    data["created_by"] = user.id
    return await product_crud.create_product(data)


@router.put("/{product_id}", dependencies=[Depends(AuthenticationRequired)])
async def update_product(product_id: int, product: ProductUpdate,
                         product_crud: ProductCRUD = Depends(get_product_crud)):
    data = product.model_dump(exclude_none=True)
    return await product_crud.update_product(product_id, data)


@router.patch("/{product_id}")
async def update_product(product_id: int, product: ProductPartialUpdate,
                         product_crud: ProductCRUD = Depends(get_product_crud)):
    return await product_crud.update_product(product_id, product.model_dump(exclude_none=True))


@router.delete("/{product_id}")
async def delete_product(product_id: int,
                         product_crud: ProductCRUD = Depends(get_product_crud)):
    return await product_crud.delete_product(product_id)
