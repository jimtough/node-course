const path = require('path')
const express = require('express')

// Special built-in node variables:
//  - directory where this script lives
//  - fully-qualified path and filename of this script
console.log(__dirname)
console.log(__filename)

// Prefer using the core 'path' module
console.log(path.join(__dirname, '../public'))

// 'express' is just a function.
// It takes no parameters, and returns an object that we will interact with.
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

// Configure express to serve all static content from the 'public' directory of this project
// NOTE: The 'index.html' in public will take precedence over a '' route handler.
app.use(express.static(publicDirectoryPath))

// By convention (for using 'request' module), req = Request, res = Response
app.get('/weather', (req, res) => {
    // Example of how to send a JSON object as the response.
    // The express module will automatically stringify the Javascript object into JSON.
    res.send({
        forecast: 'The weather today will be total crap. Cold, rainy, cloudy. 0% chance of meatballs.',
        location: 'Nova Scotia, Canada'
    })
})

// Listen on port 3000 locally while developing.
// I just need to go here: http://localhost:3000/
app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
