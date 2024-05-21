// Function to handle initial setup and event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Connect to WebSocket server
    const socket = io('http://localhost:5000');
    // DOM elements
    const questionElem = document.getElementById('question');
    const optionsElem = document.getElementById('options');
    const resultsElem = document.getElementById('results');

    // Fetch poll data from server and render
    fetch('http://localhost:3000/poll')
        .then(response => response.json())
        .then(data => {
            questionElem.textContent = data.question;

            // Render poll options
            data.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.textContent = option;
                button.addEventListener('click', () => {
                    // Emit vote event to WebSocket server
                    socket.emit('vote', { option: index });
                });
                optionsElem.appendChild(button);
            });

            // Initial rendering of poll results
            updateResults(data.votes);
        });

    // Listen for update_votes event from server and render updated results
    socket.on('update_votes', (data) => {
        updateResults(data.votes);
    });

    // Function to render poll results dynamically
    function updateResults(votes) {
        resultsElem.innerHTML = '';
        votes.forEach((vote, index) => {
            const result = document.createElement('div');
            result.textContent = `${vote} votes for ${optionsElem.children[index].textContent}`;
            resultsElem.appendChild(result);
        });
    }
});
