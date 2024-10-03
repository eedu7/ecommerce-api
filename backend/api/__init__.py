from fastapi import Depends, FastAPI, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from dependencies.authentication import AuthenticationRequired
from middlewares.authentication import AuthBackend, AuthenticationMiddlewares
from .cart import router as cart_router
from .cart_item import router as cart_item_router
from .category import router as category_router
from .product import router as product_router
from .users import router as user_router

app = FastAPI(
    title="Ecommerce API",
)

app.add_middleware(AuthenticationMiddlewares, backend=AuthBackend())
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_headers=["*"],
    allow_credentials=True,
    allow_methods=["*"],
)


@app.get("/", dependencies=[Depends(AuthenticationRequired)])
async def root(request: Request):
    try:
        user_id = request.user.id
        return {"message": f"Welcome User with ID: {user_id}"}
    except Exception as e:
        return JSONResponse(
            status_code=status.HTTP_200_OK, content={"message": f"Ecommerce API: {e}"}
        )


app.include_router(user_router, prefix="/users", tags=["User"])
app.include_router(category_router, prefix="/categories", tags=["Category"])

app.include_router(product_router, prefix="/product", tags=["Product"])
app.include_router(cart_router, prefix="/cart", tags=["Cart"])
app.include_router(cart_item_router, prefix="/cart-item", tags=["CartItem"])
