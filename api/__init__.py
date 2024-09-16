from fastapi import FastAPI, status
from fastapi.responses import JSONResponse

from .users import router as user_router

app = FastAPI(
    title="Ecommerce API",
)


@app.get("/")
async def root():
    return JSONResponse(
        status_code=status.HTTP_200_OK, content={"message": "Ecommerce API"}
    )


app.include_router(user_router, prefix="/users", tags=["Users"])
