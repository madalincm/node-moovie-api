var router = require('express').Router();
const bodyParser = require("body-parser");
const _ = require("lodash");

var {mongoose} = require("../.././db/mongoose");
var {User} = require("../.././models/users");

var jsonParser = bodyParser.json();

router.get("/users", (req,res) => {
    User.find().then((users) => {
        res.send({users});
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post("/users", jsonParser, (req,res) => {

    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


module.exports = router
