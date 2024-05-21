from flask import Flask, render_template
from flask_socketio import SocketIO, emit

# Initialize Flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
socketio = SocketIO(app, cors_allowed_origins="*")

# Poll data (replace with actual data source if needed)
poll_data = {
    'question': 'What is your favorite programming language?',
    'options': ['Python', 'JavaScript', 'Java', 'C++'],
    'votes': [0, 0, 0, 0]
}

# Route to render index.html template
@app.route('/')
def index():
    return render_template('index.html')

# WebSocket event handler for receiving votes
@socketio.on('vote')
def handle_vote(data):
    option = data['option']
    poll_data['votes'][option] += 1
    # Emit update_votes event to all clients with updated poll data
    emit('update_votes', poll_data, broadcast=True)

# Run Flask app with SocketIO support
if __name__ == '__main__':
    socketio.run(app, debug=True, host='0.0.0.0', port=5000)
