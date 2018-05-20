require("./config/config.js");

const express = require("express");
const {ObjectId} = require("mongodb");
const _ = require("lodash");
const bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {User} = require("./models/users");

const port = process.env.PORT;
var app = express();

app.get("/", (req,res) => {
    res.send("test from /");
});

app.get("/users", (req,res) => {
    User.find().then((users) => {
        res.send({users});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.post("/users", (req,res) => {

    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    // var user = new User({
    //     email: req.body.email,
    //     password: req.body.password
    // });

    user.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});



app

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

