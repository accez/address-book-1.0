// Require the express module
const express = require('express');
// Create a new web server
const app = express();
// Tell the web server to serve files
// from the www folder
app.use(express.static('src'));
// Start the web server on port 3000
app.listen(3002,() => console.log('Listening on port 3002'));