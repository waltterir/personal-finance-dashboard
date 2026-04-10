from decimal import Decimal
from datetime import datetime, date
from sqlmodel import SQLModel, Field
from pydantic import BaseModel

class TransactionBase(SQLModel):
    description: str
    amount: Decimal
    category: str
    transaction_date: date

class Transaction(TransactionBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    created_at: datetime | None = None

class TransactionCreate(TransactionBase):
    pass

class TransactionRead(TransactionBase):
    id: int
    created_at: datetime