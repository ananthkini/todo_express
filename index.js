const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const publicRoutes = require('./routes/public/public')

// create express app
const app = express();
app.set('view engine','ejs')

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.use('/', publicRoutes );

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});