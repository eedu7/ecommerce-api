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


config: Config = Config()
