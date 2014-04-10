
from config import *
from models.database_access import *

#database has values already filled in. You can query for a map object, and then pull out its items list by using the following

#getting the map with id 1
m = db.session.query(Maps).get(1)

#automatically does the join on the map_items table to pull together the result
item_list = m.items

for item in item_list:
    print (item)




DAC = database_access()
print (DAC.get_map_with_items(1))
