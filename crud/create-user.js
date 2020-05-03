require("../connection");

const User = require("../models/user");

module.exports.createUser = async function(name, password , email) {
    const user = await new User({
        name: name,
        password: password,
        email: email,
    });

    user.save();
    console.log("User Created");
};