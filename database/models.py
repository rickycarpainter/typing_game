from sqlalchemy import Column, Integer, String
from database import Base

class Scores(Base):
    __tablename__ = 'scores'
    #sqlalchemy automatically sets the first int primary key to autoincrement
    id = Column(Integer, primary_key=True)
    map_id = Column(Integer)
    #map_id = Column(Integer, primary_key=True, db.ForeignKey(maps.id)) foreign keys not working
    initials = Column(String(3))
    score = Column(Integer)

    def __init__(self, map_id=None, initials=None, score=None):
        self.map_id = map_id
        self.initials = initials
        self.score = score

    #seems to be the standard for a toString() function
    def __repr__(self):
        return "{id: %d,\nmap_id: %d,\ninitials:  %s,\nscore: %d,}" % (self.id, self.map_id, self.initials, self.score)

class Maps(Base):
    __tablename__ = 'maps'
    id = Column(Integer, primary_key=True)
    height = Column(Integer)
    width = Column(Integer)
    url = Column(String(200))

    def __init__(self, height=0, width=0, url=None):
        self.height = height
        self.width = width
        self.url = url

    def __repr__(self):
        f = open(self.url, "r")
        return f.read()

class Passwords(Base):
    __tablename__ = 'passwords'
    id = Column(Integer, primary_key=True)
    password = Column(Integer)
    map_id = Column(Integer)

    def __init__(self, password=None, map_id=None):
        self.password = password
        self.map_id = map_id

    def __repr__(self):
        return "{id- %d,\npassword: %d,\nmap_id: %d}" % (self.id, self.password, self.map_id)
    
class MapItems(Base):
    __tablename__ = 'mapitems'
    map_id = Column(Integer, primary_key=True)
    item_id = Column(Integer)

    def __init__(self, map_id=None, item_id=None):
        self.map_id = map_id
        self.item_id = item_id

    def __repr__(self):
        return "{map_id: %d,\nitem_id: %d}" % (self.map_id, self.item_id)

class Items(Base):
    __tablename__ = 'items'
    id = Column(Integer, primary_key=True)
    sprite_x = Column(Integer)
    sprite_y = Column(Integer)
    width = Column(Integer)
    height = Column(Integer)
    type = Column(String(20))

    def __init__(self, sprite_x=None, sprite_y=None, width=0, height=0, type=None):
        self.sprite_x = sprite_x
        self.sprite_y = sprite_y
        self.width = width
        self.height = height
        self.type = type

    def __repr__(self):
        return "{id: %d,\nsprite_x: %d,\nsprite_y: %d,\nwidth: %d,\nheight: %d,\ntype: %s}" % (self.id, self.sprite_x, self.sprite_y, self.width, self.height, self.type)
