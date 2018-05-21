var router = require('express').Router();
const bodyParser = require("body-parser");
const _ = require("lodash");

var {mongoose} = require("../.././db/mongoose");
var {Post} = require("../.././models/post");

var jsonParser = bodyParser.json();

router.get("/post", (req,res) => {
    Post.find().then((posts) => {
        res.send({posts});
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post("/post", jsonParser, (req,res) => {

    var body = _.pick(req.body, ['text']);
    var post = new Post(body);

    post.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


module.exports = router
