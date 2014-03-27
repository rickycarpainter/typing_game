from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine('sqlite:////tmp/test.db', convert_unicode=True)
db_session = scoped_session(sessionmake(autocommit=False,autoflush=False,bind=engine))

Base = declarative_base()
Base.quesry = db_session.query_property()

def init_db():
    from models.py import *
    Base.metadata.create_all(bind=engine)
