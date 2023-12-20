// Create web server

// 1. Import Express
const express = require('express');

// 2. Create server
const app = express();

// 3. Create route handler
app.get('/', (req, res) => {
    res.send('Hello world');
});

// 4. Start server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});