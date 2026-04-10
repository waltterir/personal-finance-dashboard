from sqlmodel import Session, select
from models.models import Transaction
from fastapi import HTTPException, status

def get_transactions(session: Session):
    statement = select(Transaction)
    return session.exec(statement).all()