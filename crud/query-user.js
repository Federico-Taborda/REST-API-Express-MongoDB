require("../connection");

const User = require("../models/user");

module.exports.user = async function(name) {
    const user = await User.find({name: name});
    console.log(user)
    return user;
};