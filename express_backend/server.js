const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

let pollData = {
    question: 'What is your favorite programming language?',
    options: ['Python', 'JavaScript', 'Java', 'C++'],
    votes: [0, 0, 0, 0]
};

app.get('/poll', (req, res) => {
    res.json(pollData);
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Express server running on port 3000');
});
