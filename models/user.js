const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        require: true
    },
    email: String,
    password: String
});

module.exports = model("User", userSchema);