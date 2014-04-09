import os
from flask import Flask, render_template
from config import *

from views.index import index
app.register_blueprint(index)

from views.auth import auth
app.register_blueprint(auth, url_prefix="/auth")


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 80))
    app.run(host='0.0.0.0', port=port)
