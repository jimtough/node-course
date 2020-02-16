const request = require('request')

// REFERENCE: https://docs.mapbox.com/api/search/
const myMapboxAccessToken = 'pk.eyJ1IjoiYWR1bHRtYWxlaHVtYW4iLCJhIjoiY2s2cDNqYXFlMWk3YjNocXR3Y2NmMmhrYiJ9.jGwnHAeVK98giUOPZHFbfg'

// Refactored the code above into a reusable function.
// Accepts a plain-text address to be submitted to Mapbox for lat/lon lookup, and a callback function.
// The callback function must accept two parameters: error and data.
const geocode = (address, callback) => {
    const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + 
            // add the URL-encoded search terms provided by the user
            //'Los%20Angeles' + 
            encodeURIComponent(address) +
            // add other API parameters, most importantly my Mapbox API access token
            '.json?limit=1&language=en-CA&access_token=' + myMapboxAccessToken
    request({ url: mapboxUrl, json: true }, (error, response)=>{
        if (error) {
            callback('Unable to connect to geolocation service', undefined)
        } else if (response.body.message) {
            callback('Error message returned by geolocation service: [' + response.body.message + ']', undefined)
        } else if (!response.body.features || response.body.features.length === 0) {
            callback('No matches returned by geolocation service', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })

}

module.exports = geocode
