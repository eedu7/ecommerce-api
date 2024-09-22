from fastapi import Depends, FastAPI, Request, status
from fastapi.responses import JSONResponse

from dependencies.authentication import AuthenticationRequired
from middlewares.authentication import AuthBackend, AuthenticationMiddlewares
from .category import router as category_router
from .users import router as user_router

app = FastAPI(
    title="Ecommerce API",
)

app.add_middleware(AuthenticationMiddlewares, backend=AuthBackend())


@app.get("/", dependencies=[Depends(AuthenticationRequired)])
async def root(request: Request):
    try:
        user_id = request.user.id
        return {"message": f"Welcome User with ID: {user_id}"}
    except Exception as e:
        return JSONResponse(
            status_code=status.HTTP_200_OK, content={"message": "Ecommerce API"}
        )


app.include_router(user_router, prefix="/users", tags=["User"])
app.include_router(category_router, prefix="/categories", tags=["Category"])
