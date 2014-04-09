from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy

SECRET_KEY = ''

TWITTER_KEY = ''
TWITTER_SECRET = ''

app = Flask(__name__)
app.secret_key = SECRET_KEY

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

from models import *

db.create_all()
