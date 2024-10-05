from fastapi import APIRouter, Depends, status

from crud.category import CategoryCRUD
from crud.product import ProductCRUD
from dependencies.authentication import AuthenticationRequired
from dependencies.get_user import get_current_user
from dependencies.models import get_product_crud, get_categories_crud
from models import Category, User
from schemas.products import ProductCreate, ProductPartialUpdate, ProductUpdate

router = APIRouter()


@router.get("/")
async def get_all_products(
    skip: int = 0,
    limit: int = 100,
    product_crud: ProductCRUD = Depends(get_product_crud),
    category_crud: CategoryCRUD = Depends(get_categories_crud),
):
    products = await product_crud.get_all_products(skip=skip, limit=limit)
    data = []
    for product in products:
        category: Category = await category_crud.get_by_id(int(product.category_id))
        print(category)
        new_data = {
            "id": product.id,
            "name": product.name,
            "description": product.description,
            "price": product.price,
            "stock_quantity": product.stock_quantity,
            "category_id": product.category_id,
            "category": category,
        }

        data.append(new_data)

    return data


@router.post(
    "/",
    dependencies=[Depends(AuthenticationRequired)],
    status_code=status.HTTP_201_CREATED,
)
async def create_product(
    product: ProductCreate,
    user: User = Depends(get_current_user),
    product_crud: ProductCRUD = Depends(get_product_crud),
):
    data = product.model_dump()
    data["created_by"] = user.id
    return await product_crud.create_product(data)


@router.put("/{product_id}", dependencies=[Depends(AuthenticationRequired)])
async def update_product(
    product_id: int,
    product: ProductUpdate,
    product_crud: ProductCRUD = Depends(get_product_crud),
):
    data = product.model_dump(exclude_none=True)
    return await product_crud.update_product(product_id, data)


@router.patch("/{product_id}")
async def update_product(
    product_id: int,
    product: ProductPartialUpdate,
    product_crud: ProductCRUD = Depends(get_product_crud),
):
    return await product_crud.update_product(
        product_id, product.model_dump(exclude_none=True)
    )


@router.delete("/{product_id}")
async def delete_product(
    product_id: int, product_crud: ProductCRUD = Depends(get_product_crud)
):
    return await product_crud.delete_product(product_id)
