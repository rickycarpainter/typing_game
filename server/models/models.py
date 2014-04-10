from config import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True)
    name = db.Column(db.String(100),)
    token = db.Column(db.String(100))
    secret = db.Column(db.String(100))

    def __init__(self,username,token,secret):
        self.username = username
        self.token = token
        self.secret = secret

    @staticmethod
    def get(username):
        return User.query.filter_by(username = username).first()
        
    def get_id(self):
        return self.id

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def __repr__(self):
        return '<User %r>' % (self.username)

class Scores(db.Model):
    #sqlalchemy automatically sets the first int primary key to autoincrement
    id = db.Column(db.Integer, primary_key=True)
    map_id = db.Column(db.Integer)
    initials = db.Column(db.String(3))
    score = db.Column(db.Integer)

    def __init__(self, map_id=None, initials=None, score=None):
        self.map_id = map_id
        self.initials = initials
        self.score = score

    #seems to be the standard for a toString() function
    def __repr__(self):
        return "{id: %d,\nmap_id: %d,\ninitials:  %s,\nscore: %d,}" % (self.id, self.map_id, self.initials, self.score)

map_items = db.Table('map-items', db.Column('item_id', db.Integer, db.ForeignKey('items.id')), db.Column('map_id', db.Integer, db.ForeignKey('maps.id')))


class Maps(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    height = db.Column(db.Integer)
    width = db.Column(db.Integer)
    url = db.Column(db.String(200))
    items = db.relationship('Items', secondary=map_items, backref=db.backref('maps', lazy='joined'))

    def __init__(self, height=0, width=0, url=None):
        self.height = height
        self.width = width
        self.url = url

    def __repr__(self):
        f = open(self.url, "r")
        return f.read()

class Items(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sprite_x = db.Column(db.Integer)
    sprite_y = db.Column(db.Integer)
    width = db.Column(db.Integer)
    height = db.Column(db.Integer)
    type = db.Column(db.String(20))

    def __init__(self, sprite_x=None, sprite_y=None, width=0, height=0, type=None):
        self.sprite_x = sprite_x
        self.sprite_y = sprite_y
        self.width = width
        self.height = height
        self.type = type

    def __repr__(self):
        return "{id: %d,\nsprite_x: %d,\nsprite_y: %d,\nwidth: %d,\nheight: %d,\ntype: %s}" % (self.id, self.sprite_x, self.sprite_y, self.width, self.height, self.type)
