from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy

SECRET_KEY = '\xda\x0f\x13\xa6\x08\xec\x87/_\r:\xbc\xd5\x0e\xb3\x92\xddI|\x18\xc7<\xd8"'

TWITTER_KEY = 'MDi4RAMnDpIfdUZeJuCfblUbt'
TWITTER_SECRET = 'jz908y9V4KP7MBAsMasClGj71bqxkBMRfaeTcpL1SB9QocugUD'

app = Flask(__name__)
app.secret_key = SECRET_KEY

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

from models.models import *

db.create_all()
