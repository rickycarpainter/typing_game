from models import *

class database_access():
    
    def __init__(self):
        self.string = ""
        
    def get_all_scores(self):
        return Scores.query.order_by(Scores.id).all()
    
    def get_all_maps(self):
        return Maps.query.order_by(Maps.id).all()

    def get_all_mapitems(self):
        return MapItems.query.order_by(MapItems.id).all()

    def get_all_items(self):
        return Items.query.order_by(Items.id).all()

    def get_user(self, name):
        return User.query.filter(User.username == name).first()
    
    def get_number_of_levels(self):
        return int(db.session.query(Maps).count());

    def update_user_level(self, name, new_level):
        current_level = db.session.query(User).filter_by(username=name).first()
        if (new_level > current_level):
            db.session.query(User).filter_by(username=name).update({"level" : new_level})
            db.session.commit()
    
    #Changed this function to return the map and the items in JSON format    
    def get_map_with_items(self, mapID):
        q = db.session.query(Maps, MapItems, Items).filter(Maps.id == MapItems.map_id).filter(MapItems.item_id == Items.id).filter(Maps.id == mapID).all();
        if (q):
            result = '{ "map" : '
            
            count = 0
            for m,mi,i in q:
                if count == 0:
                    result += m.__repr__()
                    result += ', "mapitems" : ['
                    count = 1

                result += "{" + mi.__repr__() + "\n" + i.__repr__() + "},"	

            result = result[0:-1] #cut off that last comma    
            result += ']\n}'
            return result
        else:
            return None
		
    def clear_database(self):
        self.clear_scores()
        self.clear_maps()
        self.clear_mapitems
        self.clear_items()
        self.clear_passwords()

    def clear_scores(self):
        return Scores.query.delete()

    def clear_maps(self):
        return Maps.query.delete()

    def clear_mapitems(self):
        return MapItems.query.delete()

    def clear_items(self):
        return Items.query.delete()
    
