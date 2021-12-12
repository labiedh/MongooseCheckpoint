var express = require("express");
var mongoose = require("mongoose");
var app = express();
let PersonModel = require('./src/models/person')
let personRoutes = require('./src/routes/person')

app.use('/people',personRoutes )
//environment variables
require('dotenv').config();
//database connection
const url = process.env.ATLAS_URI;
mongoose.connect(url);
const connection = mongoose.connection;
connection.once('open', () => {
 console.log("Connected Database Successfully");
});
app.listen(3000,function(req,res){
 console.log("Server is started on port 3000");
});