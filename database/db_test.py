
from database import *
from models import *

init_db()

I = Items(3,4,100,200,"test")
db_session.add(I)
db_session.commit()

M = Maps(100, 100, "3456792847582")
db_session.add(M)
db_session.commit()

S = Scores(1, "KMJ", 9001)
db_session.add(S)
db_session.commit()

P = Passwords(381024, 1)
db_session.add(P)
db_session.commit()

MI = MapItems(1, 3)
db_session.add(MI)
db_session.commit()
