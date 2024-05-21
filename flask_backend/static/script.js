document.addEventListener('DOMContentLoaded', () => {
    const socket = io('http://localhost:5000');
    const questionElem = document.getElementById('question');
    const optionsElem = document.getElementById('options');
    const resultsElem = document.getElementById('results');

    fetch('http://localhost:3000/poll')
        .then(response => response.json())
        .then(data => {
            questionElem.textContent = data.question;

            data.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.textContent = option;
                button.addEventListener('click', () => {
                    socket.emit('vote', { option: index });
                });
                optionsElem.appendChild(button);
            });

            updateResults(data.votes);
        });

    socket.on('update_votes', (data) => {
        updateResults(data.votes);
    });

    function updateResults(votes) {
        resultsElem.innerHTML = '';
        votes.forEach((vote, index) => {
            const result = document.createElement('div');
            result.textContent = `${vote} votes for ${optionsElem.children[index].textContent}`;
            resultsElem.appendChild(result);
        });
    }
});
