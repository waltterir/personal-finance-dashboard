from sqlmodel import Session, select
from models.models import Transaction, TransactionCreate
from fastapi import HTTPException, status
from datetime import datetime

def get_transactions(session: Session):
    statement = select(Transaction)
    return session.exec(statement).all()

def create_transaction(session: Session, transaction_in: TransactionCreate):
    transaction = Transaction(
        description=transaction_in.description, 
        amount=transaction_in.amount, 
        category=transaction_in.category, 
        transactions_date=transaction_in.transactions_date,
        created_at=datetime.now()
        )
    session.add(transaction)
    session.commit()
    session.refresh(transaction)
    return transaction
