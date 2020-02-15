const request = require('request')

const url = 'https://api.darksky.net/forecast/ead7bc2e808f9a216d9f391538d1ede7/44.7247,-63.6909'

// Use 'request' module to request weather data from the DarkSky API.
// We expect this to return JSON-formatted data in the response body.
request({ url: url }, (error, response)=>{
    //console.log(response)
    const data = JSON.parse(response.body)
    console.log(data.currently)
})
