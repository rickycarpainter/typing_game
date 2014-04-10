from flask import Blueprint, render_template, request
from flask.ext.login import login_required
from flask.ext.login import current_user

from models.item import *

index = Blueprint('index', __name__)

@index.route('/')
def show():
    login = False
    name = None
    if current_user.is_authenticated():
        login = True 
        if current_user.name:
            name = current_user.name
        else:
            name = current_user.username
    return render_template('index.html',login=login,name=name)

@index.route('/Game')
def game():
    return render_template('Game.html')
