from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy
from database import init_db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

db.create_all()

#I = Items(3,4,100,200,"test")
#db_session.add(I)
#db_session.commit()

#result = Items.query.all()
