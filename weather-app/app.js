const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const placeName = 'Digby, Nova Scotia'

geocode(placeName, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Now getting forecast for ' + data.location + '...')
        forecast(data.latitude, data.longitude, (error, data)=>{
            console.log(error)
            console.log(data)
        })
    }
})
