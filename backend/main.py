from fastapi import FastAPI, Depends
from sqlmodel import select, Session
from database.database import get_session
from models.models import Transaction
from routes import transaction

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Backend toimii"}

app.include_router(transaction.router)