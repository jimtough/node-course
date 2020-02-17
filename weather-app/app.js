const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// This will be the first user-supplied command line parameter, or undefined if there are none
const placeName = process.argv[2]

if (!placeName) {
    return console.log('You must supply the place name for the forecast as a commmand line parameter!')
}

geocode(placeName, (error, geocodeData) => {
    if (error) {
        return console.log(error)
    }
    console.log('Now getting forecast for ' + geocodeData.location + '...')
    forecast(geocodeData.latitude, geocodeData.longitude, (error, forecastData)=>{
        if (error) {
            return console.log(error)
        }
        console.log('Forecast retrieved for ' + geocodeData.location)
        console.log(forecastData)
    })
})
