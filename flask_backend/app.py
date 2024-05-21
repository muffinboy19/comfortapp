from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
socketio = SocketIO(app)

poll_data = {
    'question': 'What is your favorite programming language?',
    'options': ['Python', 'JavaScript', 'Java', 'C++'],
    'votes': [0, 0, 0, 0]
}

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('vote')
def handle_vote(data):
    option = data['option']
    poll_data['votes'][option] += 1
    emit('update_votes', poll_data, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, debug=True, host='0.0.0.0')
