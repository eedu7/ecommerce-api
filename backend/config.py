import os

from dotenv import load_dotenv

load_dotenv()

from pydantic_settings import BaseSettings


class ConfigSettings(BaseSettings):
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = True


class Config(ConfigSettings):
    MYSQL_URL: str = os.getenv("MYSQL_URL")
    SECRET_KEY: str = os.getenv("SECRET_KEY")
    JWT_ALGORITHM: str = os.getenv("JWT_ALGORITHM")
    JWT_EXPIRY: int = 60 * 24 * 7
    STRIPE_SECRET_KEY: str = os.getenv("STRIPE_SECRET_KEY")
    STRIPE_PUBLISHABLE_KEY: str = os.getenv("STRIPE_PUBLISHABLE_KEY")


config: Config = Config()
