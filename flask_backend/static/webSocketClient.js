class WebSocketClient {
    /**
     * Class representing a WebSocket client.
     * @param {string} url - The URL of the WebSocket server.
     */
    constructor(url) {
        this.url = url;
        this.socket = null;
    }

    /**
     * Connect to the WebSocket server.
     */
    connect() {
        this.socket = new WebSocket(this.url);
    }

    /**
     * Send a message to the WebSocket server.
     * @param {string} message - The message to send.
     */
    send(message) {
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(message);
        }
    }

    /**
     * Disconnect from the WebSocket server.
     */
    disconnect() {
        this.socket.close();
    }
}
