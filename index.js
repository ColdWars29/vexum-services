const express = require('express');
const app = express();
const port = 8080;

// Basic endpoint
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('Healthy');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
