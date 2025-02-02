const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const port = 8080;

// Serve static HTML file
app.use(express.static(__dirname)); 

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server has started on http://localhost:${port}`);
});
