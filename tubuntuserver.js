const express = require('express');
const path = require('path');


const app = express();
const port = 80;

// Define a route to serve the HTML page
app.get('/', (req, res) => {
    const htmlPath = path.join(__dirname, 'index.html');
    res.sendFile(htmlPath);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});