from flask import Blueprint, render_template, request, jsonify
from flask.ext.login import login_required
from flask.ext.login import current_user

import os, sys

from models.database_access import *

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
    login = False
    name = None
    if current_user.is_authenticated():
        login = True 
        if current_user.name:
            name = current_user.name
        else:
            name = current_user.username
    return render_template('Game.html', login=login, name=name)

@index.route('/Game/DownloadMap', methods=['POST'])
def downloadMap():
    mapID = int(request.form['id'])
    dac = database_access()
    result = dac.get_map_with_items(mapID)
    if (result):
        return result
    else:
        return jsonify(result="Map Not Found")

@index.route('/Game/HighestUserLevel', methods=['GET'])
def highestLevel():
    if current_user.is_authenticated():
        highest_level = current_user.level
        return jsonify(result=highest_level)
    return jsonify(result=1)
        
@index.route('/Game/AllLevels', methods=['GET'])
def alllevels():
    dac = database_access()
    response = dac.get_number_of_levels()
    return jsonify(result=response)

@index.route('/Game/NewLevelUnlocked', methods=['POST'])
def incrementLevel():
    current = int(request.form['mapid'])
    print ("Map " + str(current) + " completed")
    new = current
    dac = database_access()
    maximum = dac.get_number_of_levels()
    if (current < maximum):
        new = current + 1
    if current_user.is_authenticated():
        dac.update_user_level(current_user.username, new)
    return jsonify(level=new)
    
		
	
