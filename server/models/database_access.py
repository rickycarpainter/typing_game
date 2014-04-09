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

    def get_all_passwords(self):
        return Passwords.query.order_by(Passwords.id).all()
    
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

    def clear_passwords(self):
        return Passwords.query.delete()
        
    
