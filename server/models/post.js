var mongoose = require("mongoose");
var validator = require("validator");

var postSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
    }
});

var Post = mongoose.model("Post", postSchema);

module.exports = {Post};