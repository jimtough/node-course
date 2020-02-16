const request = require('request')

// Add some request parameters - set units to 'ca' to get Canadian style units
// REFERENCE: https://darksky.net/dev/docs#forecast-request
const darkskyUrl = 'https://api.darksky.net/forecast/ead7bc2e808f9a216d9f391538d1ede7/44.7247,-63.6909?key=value&otherkey=othervalue&units=ca'

/*
COMMENTING OUT WHILE EXPERIMENTING WITH MAPBOX API BELOW...
// Use 'request' module to request weather data from the DarkSky API.
// By passing the 'json: true' parameter in its options object, we should get back a JSON-formatted response.
request({ url: darkskyUrl, json: true }, (error, response)=>{
    //console.log(response.body.currently)
    console.log("It is currently " + response.body.currently.temperature + 
        " C. There is a " + response.body.currently.precipProbability + 
        "% chance of rain. Daily summary: '" + response.body.daily.data[0].summary + "'")
})
*/

// REFERENCE: https://docs.mapbox.com/api/search/
const myMapboxAccessToken = 'pk.eyJ1IjoiYWR1bHRtYWxlaHVtYW4iLCJhIjoiY2s2cDNqYXFlMWk3YjNocXR3Y2NmMmhrYiJ9.jGwnHAeVK98giUOPZHFbfg'
//const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?limit=1&language=en-CA&access_token=pk.eyJ1IjoiYWR1bHRtYWxlaHVtYW4iLCJhIjoiY2s2cDNqYXFlMWk3YjNocXR3Y2NmMmhrYiJ9.jGwnHAeVK98giUOPZHFbfg'
const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + 
        // add the URL-encoded search terms provided by the user
        'Los%20Angeles' + 
        // add other API parameters, most importantly my Mapbox API access token
        '.json?limit=1&language=en-CA&access_token=' + myMapboxAccessToken

request({ url: mapboxUrl, json: true }, (error, response)=>{
    const matchingPlaceName = response.body.features[0].place_name
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log("The lat/lon of '" + matchingPlaceName + "' is " + latitude + ', ' + longitude + '.')
})

