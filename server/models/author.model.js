const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide a name."],
        minlength: [3, "Name must be at least 3 characters."]
    }
},
    {timestamps: true}
);

module.exports.Author = mongoose.model("Author", AuthorSchema)