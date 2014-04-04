
from models import *
from database import *

#Can query model objects directly for database results. 

init_db()

m = Maps(5,5,"test.txt")
db_session.add(m)
db_session.commit()


result = Maps.query.order_by(Maps.id).all()
print (result)



