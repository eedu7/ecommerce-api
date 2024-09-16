from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession

from crud.users import UserCrud
from db import get_async_session


def get_user_crud(session: AsyncSession = Depends(get_async_session)):
    return UserCrud(session=session)
