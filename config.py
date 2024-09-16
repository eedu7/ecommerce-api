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


config: Config = Config()
