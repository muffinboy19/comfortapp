from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
socketio = SocketIO(app, cors_allowed_origins="*")

# Import routes
from . import routes

# Import sockets (if needed)
# from . import sockets
