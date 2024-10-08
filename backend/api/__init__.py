from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from db import get_async_session
from middlewares.authentication import AuthBackend, AuthenticationMiddlewares
from utils.seeders import seed_categories, seed_products, seed_users

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

app.include_router(user_router, prefix="/users", tags=["User"])
app.include_router(category_router, prefix="/categories", tags=["Category"])

app.include_router(product_router, prefix="/product", tags=["Product"])
app.include_router(cart_router, prefix="/cart", tags=["Cart"])
app.include_router(cart_item_router, prefix="/cart-item", tags=["CartItem"])


@app.on_event("startup")
async def startup_event():
    async for db in get_async_session():
        await seed_users(db)
        await seed_categories(db)
        await seed_products(db)
