
from models import *

#Can query model objects directly for database results. 

result = Maps.query.order_by(Maps.id).all()
print (result)

r = Items.query.all()
print (r)


