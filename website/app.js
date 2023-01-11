/* Global Variables */
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();

// Base URL and API Key for OpenWeatherMap API
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=16898cc25c547764827e2ea8e8345e01&units=imperial';

document.getElementById('generate').addEventListener('click', preformAction);

function preformAction(e) {
    e.preventDefault();

    function validateZipCode(val) {
        var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
        return zipCodePattern.test(val);
    }
    // User input values
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    if (validateZipCode(zipCode)) {
        getAPIData(baseURL, zipCode, apiKey)
            .then(function (APIData) {
                // Add data to our project endpoint
                postData('/add', {
                    temp: Math.round(APIData.main.temp),
                    date: newDate,
                    content: feelings
                })
            }).then(function (newData) {
                // call updateUI to update browser content
                updateUI()
            })
    }
    else
        alert('Please enter a valid zip code');
}

// GET request to fetch the data from the external API
const getAPIData = async (baseURL, zipCode, apiKey) => {
    const url = baseURL + zipCode + apiKey;
    const response = await fetch(url);
    try {
        const APIData = await response.json();
        console.log('API data: ', APIData);
        return APIData;
    } catch (error) {
        console.log('Error occured: ', error);
    }
}

// POST request to insert data into our endpoint
const postData = async (url = '', data = {}) => {
    const request = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await request.json();
        console.log('New data saved: ', newData);
        return newData;
    } catch (error) {
        console.log('Error occured: ', error);
    }
}

// GET request to fetch the data our endpoint to dinamically update the UI
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        const weatherData = await request.json();
        document.getElementById('temp').innerHTML = weatherData.temp + '&deg F';
        document.getElementById('content').innerHTML = weatherData.content;
        document.getElementById('date').innerHTML = weatherData.date;
        document.querySelector('#box').style.opacity = 1;
    } catch (error) {
        console.log('Error occured: ', error);
    }
}



