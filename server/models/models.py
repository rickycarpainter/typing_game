from config import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True)
    name = db.Column(db.String(100),)
    token = db.Column(db.String(100))
    secret = db.Column(db.String(100))
    level = db.Column(db.Integer)

    def __init__(self, username, token, secret, level = 1):
        self.username = username
        self.token = token
        self.secret = secret
        self.level = level

    @staticmethod
    def get(username):
        return User.query.filter_by(username = username).first()
        
    def get_id(self):
        return self.id

    def get_level(self):
        return self.level

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

class MapItems(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	item_id = db.Column('item_id', db.Integer, db.ForeignKey('items.id'))
	map_id = db.Column('map_id', db.Integer, db.ForeignKey('maps.id'))
	pos_x = db.Column('pos_x', db.Integer)
	pos_y = db.Column('pos_y', db.Integer)

	def __init__(self, map_id=0, item_id=0, pos_x=0,pos_y=0):
		self.item_id = item_id
		self.map_id = map_id
		self.pos_x = pos_x
		self.pos_y = pos_y

	def __repr__(self):
		return '"pos_x": %d,\n"pos_y": %d,' % ( self.pos_x, self.pos_y )


class Maps(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    height = db.Column(db.Integer)
    width = db.Column(db.Integer)
    url = db.Column(db.String(200))
    #items = db.relationship('Items', secondary=map_items, backref=db.backref('maps', lazy='joined'))

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
        return '"sprite_x": %d,\n"sprite_y": %d,\n"width": %d,\n"height": %d,\n"type": %s' % ( self.sprite_x, self.sprite_y, self.width, self.height, self.type)
