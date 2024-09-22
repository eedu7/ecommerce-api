from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import JSONResponse

from crud.category import CategoryCRUD
from dependencies.authentication import AuthenticationRequired
from dependencies.get_user import get_current_user
from dependencies.models import get_categories_crud
from models import Category, User
from schemas.category import CategoryCreate, CategoryResponse, CategoryUpdate

router: APIRouter = APIRouter()


@router.get("/", response_model=List[CategoryResponse])
async def get_all_categories(
    crud: CategoryCRUD = Depends(get_categories_crud),
) -> List[Category]:
    try:
        return await crud.get_all()
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Exception occurred: {e}"
        )


@router.get("/{category_id}", response_model=CategoryResponse)
async def get_by_id(
    category_id: int, crud: CategoryCRUD = Depends(get_categories_crud)
) -> Category:
    category: Category = await crud.get_by_id(category_id)
    if not category:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Category not found"
        )
    return category


@router.post(
    "/", dependencies=[Depends(AuthenticationRequired)], response_model=CategoryResponse
)
async def create_category(
    data: CategoryCreate,
    crud: CategoryCRUD = Depends(get_categories_crud),
    user: User = Depends(get_current_user),
) -> Category:
    return await crud.create_category(
        user_id=user.id, data=data.model_dump(exclude_none=True)
    )


@router.patch(
    "/{category_id}",
    dependencies=[Depends(AuthenticationRequired)],
    response_model=CategoryResponse,
)
async def update_category(
    category_id: int,
    data: CategoryUpdate,
    crud: CategoryCRUD = Depends(get_categories_crud),
) -> Category:
    return await crud.update_category(category_id, data.model_dump(exclude_none=True))


@router.delete("/{category_id}")
async def delete_category(
    category_id: int, crud: CategoryCRUD = Depends(get_categories_crud)
) -> JSONResponse:
    await crud.delete_category(category_id)
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content={"detail": f"Category with '{category_id}' deleted successfully!"},
    )
