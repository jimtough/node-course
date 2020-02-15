const request = require('request')

// Add some request parameters - set units to 'ca' to get Canadian style units
// REFERENCE: https://darksky.net/dev/docs#forecast-request
const url = 'https://api.darksky.net/forecast/ead7bc2e808f9a216d9f391538d1ede7/44.7247,-63.6909?key=value&otherkey=othervalue&units=ca'

// Use 'request' module to request weather data from the DarkSky API.
// By passing the 'json: true' parameter in its options object, we should get back a JSON-formatted response.
request({ url: url, json: true }, (error, response)=>{
    //console.log(response.body.currently)
    console.log("It is currently " + response.body.currently.temperature + 
        " C. There is a " + response.body.currently.precipProbability + 
        "% chance of rain. Daily summary: '" + response.body.daily.data[0].summary + "'")
})
