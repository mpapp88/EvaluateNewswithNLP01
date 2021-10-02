const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express()

const dotenv = require('dotenv');
dotenv.config();

// Cors for cross origin allowance
app.use(cors());

//Configuring the middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname)

//Setting up API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const apiKey = process.env.API_KEY;
console.log(`Your API Key is ${process.env.API_KEY}`);
//let userRequest = [];

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//POST route
app.post('/addMeaningCloud', async function(req, res) {
    userRequest = req.body.url;
    console.log(`Request from user: ${userRequest}`);
    const requestURL = `${baseURL}?key=&of=json&txt=${apiKey}&url=${userRequest}&lang=en`;
    const response = await fetch(requestURL);
    const apiData = await response.json();
    console.log(apiData);
    res.send(apiData);
})