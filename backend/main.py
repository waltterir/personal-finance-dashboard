from fastapi import FastAPI, Depends
from sqlmodel import select, Session
from database.database import get_session
from models import Transaction


app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Backend toimii"}

@app.get("/transactions")
def get_transactions(session: Session = Depends(get_session)):
    transactions = session.exec(select(Transaction)).all()
    return transactions