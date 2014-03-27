
from database import *
from models import *

init_db()

I = Items(3,4,100,200,"test")
db_session.add(I)
db_session.commit()
