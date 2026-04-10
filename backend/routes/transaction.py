from fastapi import APIRouter, Depends, status
from models.models import TransactionRead
from crud import transaction_crud as crud
from sqlmodel import Session
from database.database import get_session

router = APIRouter(prefix="/transactions", tags=["transactions"])

@router.get("/", response_model=list[TransactionRead])
def get_transactions(*, session: Session = Depends(get_session)):
    return crud.get_transactions(session)