const express = require ("express")
const bodyParser = require("body-parser")

const app = express();
const {API_VERSION} = require('./config');

//...load routing//


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// configure head HTTP

//BASIC ROUTES


module.exports=app;