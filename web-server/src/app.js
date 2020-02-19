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
    res.send('Hello express!')
})
app.get('/about', (req, res) => {
    res.send('This is the "about" page')
})
app.get('/help', (req, res) => {
    res.send('Help page')
})
app.get('/weather', (req, res) => {
    res.send('This is the "weather" page')
})
//-----------------------------------------------------------------------------

// Listen on port 3000 locally while developing.
// I just need to go here: http://localhost:3000/
app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
