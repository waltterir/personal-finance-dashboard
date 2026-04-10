from sqlmodel import create_engine, Session

DATABASE_URL = "postgresql+psycopg://postgres:17sss8@localhost:5432/finance_app"

engine = create_engine(DATABASE_URL, echo=True)

def get_session():
    with Session(engine) as session:
        yield session