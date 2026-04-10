from decimal import Decimal
from datetime import datetime, date
from sqlmodel import SQLModel, Field

class TransactionBase(SQLModel):
    description: str
    amount: Decimal
    category: str
    transactions_date: date

class Transaction(TransactionBase, table=True):
    __tablename__ = "transactions"
    id: int | None = Field(default=None, primary_key=True)
    created_at: datetime | None = None

class TransactionCreate(TransactionBase):
    pass

class TransactionRead(TransactionBase):
    id: int
    created_at: datetime

