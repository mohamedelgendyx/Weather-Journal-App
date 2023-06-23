# Weather Journal App ☔

## Overview
Asynchronous web app that fetches the weather information from <a href="https://openweathermap.org/current#zip">OpenWeatherMap</a> API based on the ZIP code of the city and dynamically updates the UI.


## Building of the project
- Set up the project environment, and downloaded the required packages (node.js and express.js).
- Added POST and GET routes to ensure correct retrieval of data from the server.
- Acquired API credentials from the OpenWeatherMap website.
- Created async functions to fetch weather data and store it on my local server.
- Set up a function that updated UI dynamically.

## How to use
1. Install Node.js on your local machine.
2. Clone the repo or download the files.
3. Run the command `npm i` to download the required packages.
4. Run the command `npm start`.
5. The server should start on http://127.0.0.1:8000/.
6. All you should do is write the ZIP code of the city (United States). You can choose any of the ZIP codes at https://www.unitedstateszipcodes.org/.
7. You can write your feelings if you want [optional].
8. The application will show you
    - The temperature of the city
    - The date
    - Your feelings

## Screenshot of UI
![UI](./UI.JPG)
