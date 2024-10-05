import json
from pathlib import Path

from sqlalchemy.ext.asyncio import AsyncSession

from models import Category, Product, User
from utils.password_handler import get_password_hash

BASE_DIR = Path(__file__).resolve().parent


async def seed_users(db: AsyncSession):
    USER_FILE = BASE_DIR / "users.json"

    with open(USER_FILE, "r") as file:
        users = json.load(file)

    for user in users:

        db_user = User(
            id=user["id"],
            name=user["name"],
            email=user["email"],
            password=get_password_hash(user["password"]),
            is_active=user["is_active"],
            is_superuser=user["is_superuser"],
            is_staff=user["is_staff"],
            is_admin=user["is_admin"],
        )
        await db.merge(db_user)

    await db.commit()


async def seed_categories(db: AsyncSession):
    CATEGORIES_FILE = BASE_DIR / "categories.json"

    with open(CATEGORIES_FILE, "r") as file:
        categories = json.load(file)

    for category in categories:
        db_category = Category(
            id=category["id"],
            name=category["name"],
            description=category["description"],
        )

        await db.merge(db_category)

    await db.commit()


async def seed_products(db: AsyncSession):
    PRODUCTS_FILE = BASE_DIR / "products.json"
    with open(PRODUCTS_FILE, "r") as file:
        products = json.load(file)

    for product in products:
        db_product = Product(**product)
        await db.merge(db_product)
    await db.commit()
