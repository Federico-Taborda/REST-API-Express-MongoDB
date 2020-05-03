require("../connection");

const User = require("../models/user");

module.exports.users = async function() {
    const users = await User.find();
    return users;
};