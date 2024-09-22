from fastapi import Depends, Request

from crud import UserCrud
from dependencies.models import get_user_crud


async def get_current_user(request: Request, crud: UserCrud = Depends(get_user_crud)):
    return await crud.get_by("id", request.user.id)
