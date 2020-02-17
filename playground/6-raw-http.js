const https = require('https')

const url = 'https://api.darksky.net/forecast/ead7bc2e808f9a216d9f391538d1ede7/44.7302,-63.6587?units=ca'

const request = https.request(url, (response) => {

    // 'let' is for a block-scoped variable
    let data = ''

    response.on('data', (chunk) => {
        // chunk is a Buffer object, so we need to convert each chunk to a string
        console.log('Received a chunk')
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()
