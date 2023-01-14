# Weather Journal App ☔

## Overview
Asynchronous web app that fetches the weather information from <a href="https://openweathermap.org/current#zip">OpenWeatherMap</a> API based on ZIP code of the city and dynamically update the UI.


## Building of the porject
- Set up the project environment, downloaded the required packages (node.js and express.js).
- Added POST and GET routes to ensure correct retrieval of data from the server.
- Acquired API credentials from OpenWeatherMap website.
- Created async functions to fetch weather data and store it on my local server.
- Set up a function that updated UI dynamically.

## How to use
1. Install Node.js on your local machine.
2. Clone the repo or download the files.
3. Open CMD and run the command `node server.js`.
4. The server should start on http://127.0.0.1:8000/.
5. All you should do is write the ZIP code of the city (United States). You can choose any of ZIP codes on https://www.unitedstateszipcodes.org/.
6. You can write your feelings if you want [optional].
7. The application will show you
    - The temperature of the city
    - The date
    - Your feelings

## Result
![UI](./UI.JPG)
