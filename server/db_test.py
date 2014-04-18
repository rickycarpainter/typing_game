
from config import *
from models.database_access import *
from models.models import *

print ("Direct query for all maps in database:\n")
#database has values already filled in. You can query for a map object, and then pull out its items list by using the following

m = Maps(13,20,'test.txt')
db.session.add(m)
m = Maps(15,21,'blah.txt')
db.session.add(m)
m = Maps(17,29,'yuck.txt')
db.session.add(m)
i = Items(10,10,50,50,'Carrot')
db.session.add(i)
i = Items(10,10,50,50,'Tunnel')
db.session.add(i)
i = Items(10,10,50,50,'Player')
db.session.add(i)
i = Items(10,10,50,50,'Carrot')
db.session.add(i)
i = Items(10,10,50,50,'Tunnel')
db.session.add(i)
i = Items(10,10,50,50,'Player')
db.session.add(i)
i = Items(10,10,50,50,'Carrot')
db.session.add(i)
i = Items(10,10,50,50,'Tunnel')
db.session.add(i)
i = Items(10,10,50,50,'Player')
db.session.add(i)
mi = MapItems(1,1,3,4)
db.session.add(mi)
mi = MapItems(1,2,5,6)
db.session.add(mi)
mi = MapItems(1,3,7,8)
db.session.add(mi)
mi = MapItems(2,1,3,4)
db.session.add(mi)
mi = MapItems(2,2,5,6)
db.session.add(mi)
mi = MapItems(2,3,7,8)

U = User("SkyBear", "my_token", "my_secret", 5)
db.session.add(U)


db.session.add(mi)
db.session.commit()

DAC = database_access()

result = DAC.get_user("SkyBear").level
print ("Highest Level: " + str(result))



#getting the map with id 1
#m = db.session.query(Maps).get(1)

#automatically does the join on the map_items table to pull together the result
#item_list = m.items

print ("**********************************\n")

print ("Single map Query through database access: \n")
print (DAC.get_map_with_items(1))
