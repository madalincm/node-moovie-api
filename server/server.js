//app config
require("./config/config.js");

//external libraries
const express = require("express");
// const {ObjectId} = require("mongodb");
// const _ = require("lodash");
// const bodyParser = require("body-parser");
// var jsonParser = bodyParser.json();

//mongoose
// var {mongoose} = require("./db/mongoose");

//db models
var {User} = require("./models/users");



const port = process.env.PORT;
var app = express();

app.use(require("./controllers"));


app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

