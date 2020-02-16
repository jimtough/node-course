const request = require('request')

const myDarkskyAccessToken = 'ead7bc2e808f9a216d9f391538d1ede7'

// REFERENCE: https://darksky.net/dev/docs#forecast-request
const baseDarkskyUrl = 'https://api.darksky.net/forecast/' + myDarkskyAccessToken + '/'

const forecast = (latitude, longitude, callback) => {
    const darkskyUrl = baseDarkskyUrl + latitude + ',' + longitude + '?units=ca'
    // Use 'request' module to request weather data from the DarkSky API.
    // By passing the 'json: true' parameter in its options object, we should get back a JSON-formatted response.
    request({ url: darkskyUrl, json: true }, (error, response)=>{
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
            // We know from purposely supplying a garbage request to Darksky that their response will contain an 'error' element in the body
            callback('Weather service responded with an error | code: [' + response.body.code + '] | error: [' + response.body.error + ']', undefined)
        } else {
            callback(undefined, 'It is currently ' + response.body.currently.temperature + 
            ' C. There is a ' + (parseFloat(response.body.currently.precipProbability) * 100).toFixed(0) + 
            '% chance of rain. Daily summary: [' + response.body.daily.data[0].summary + ']')
        }
    })
}

module.exports = forecast
