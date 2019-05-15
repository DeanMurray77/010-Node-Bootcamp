const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

geocode(location, (error, data) => { //(error, data) is just the response back via callback
    if(error) {
        return console.log("Error:", error);
    }
    
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error) {
            return console.log('Error', error)
        }

        console.log(data.location);
        console.log(forecastData);
    })
})