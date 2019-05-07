
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Saint George, Utah', (error, data) => { //(error, data) is just the response back via callback
    console.log("Error:", error);
    console.log("Data:", data);   
})

forecast(37.11, -113.56, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })