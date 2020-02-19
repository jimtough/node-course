const express = require('express')

// 'express' is just a function.
// It takes no parameters, and returns an object that we will interact with.
const app = express()

//-----------------------------------------------------------------------------
// EXAMPLE SITE STRUCTURE
//  app.com
//  app.com/about
//  app.com/help
//  app.com/weather

// By convention (for using 'request' module), req = Request, res = Response
app.get('', (req, res) => {
    // this is the handler for the top-level route on my web site
    res.send('<h1>Hello express!</h1>')
})
app.get('/about', (req, res) => {
    res.send('<h1>This is the "about" page</h1>')
})
app.get('/help', (req, res) => {
    res.send('<h1>This is the "help" page</h1>')
})
app.get('/weather', (req, res) => {
    // Example of how to send a JSON object as the response.
    // The express module will automatically stringify the Javascript object into JSON.
    res.send({
        forecast: 'The weather today will be total crap. Cold, rainy, cloudy. 0% chance of meatballs.',
        location: 'Nova Scotia, Canada'
    })
})
//-----------------------------------------------------------------------------

// Listen on port 3000 locally while developing.
// I just need to go here: http://localhost:3000/
app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
