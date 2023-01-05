// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */

// Here we are configuring express to use body-parser as middle-ware.
// Body-parser allow the backend to access JSON data send from the client using request.body in POST route handler
const bodyParser = require('body-parser');

// Parse applicaiton/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// CORS allow us to manage a cross-origin resource sharing policy so that the frontend(client) can talk to the server
const cors = require('cors');

// Enable all CORS requests
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// GET route to return the ProjectData endpoint
const getData = (request, response) => response.send(projectData);

app.get('/all', getData);

// POST route to add new data to the ProjectData endpoint
const addData = (request, response) => {
    projectData = request.body;
    console.log(projectData);
    response.send(projectData);
}

app.post('/add', addData);

// Setup Server
const port = 8000;
const hostname = "127.0.0.1";

// Listenning to the server
app.listen(port, () => {
    console.log(`Server running at: http://${hostname}:${port}/`)
});
