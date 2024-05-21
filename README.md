# Real-Time Polling System

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Topics Learned](#topics-learned)

## Project Overview

The Real-Time Polling System is a web application that allows users to participate in live polls and see real-time updates of voting results. This project demonstrates the use of Flask and Express frameworks for the backend, along with WebSocket for real-time communication.

## Features

- **Real-Time Updates**: Users can see live voting results without refreshing the page.
- **Multiple Options**: Users can choose from multiple poll options.
- **RESTful API**: An Express backend provides a RESTful API for fetching poll data.
- **WebSocket Communication**: A Flask backend manages real-time updates using WebSocket.
- **Responsive UI**: The front-end is built with simple HTML, CSS, and JavaScript.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask, Express
- **WebSocket**: Flask-SocketIO
- **REST API**: Express
- **Dependencies Management**: npm for Node.js, pip for Python

## Project Structure

```
real-time-polling-system/
│
├── flask_backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── templates/
│   │   └── index.html
│   └── static/
│       ├── script.js
│       └── styles.css
│
├── express_backend/
│   ├── server.js
│   ├── package.json
│   └── public/
│       ├── index.html (if needed)
│       ├── script.js (if needed)
│       └── styles.css (if needed)
```

## Installation

### Prerequisites

- Node.js and npm installed
- Python and pip installed

### Steps

1. **Clone the repository:**

```sh
git clone https://github.com/your-username/real-time-polling-system.git
cd real-time-polling-system
```

2. **Set up the Express backend:**

```sh
cd express_backend
npm install
npm start
```

3. **Set up the Flask backend:**

```sh
cd ../flask_backend
python -m venv venv
# Activate the virtual environment:
# On Windows: venv\Scripts\activate
# On macOS/Linux: source venv/bin/activate
pip install -r requirements.txt
python app.py
```

## Topics Learned

During the development of this project, the following topics and skills were learned and applied:

- **Integration of Flask and Express**: Learned how to integrate two different backend frameworks to handle different parts of an application.
- **WebSocket Communication**: Implemented real-time features using WebSocket for instant updates.
- **RESTful API Development**: Created a RESTful API using Express to serve poll data.
- **Frontend and Backend Interaction**: Ensured seamless interaction between frontend and backend components.
- **File Structure Organization**: Organized a project structure that separates concerns and makes the project easy to navigate.
- **Dependency Management**: Managed dependencies using npm for Node.js and pip for Python.
- **Real-Time Data Handling**: Handled real-time data updates efficiently and displayed them dynamically on the frontend.
- **Modular Code Writing**: Wrote modular and maintainable code adhering to clean code principles.

## Usage

1. **Start the Express server**:

   The Express server will run on `http://localhost:3000`.

2. **Start the Flask server**:

   The Flask server will run on `http://localhost:5000`.

3. **Open your browser and navigate to `http://localhost:5000`** to interact with the application.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-feature-branch`
6. Create a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
