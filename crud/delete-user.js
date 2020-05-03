require("../connection");

const User = require("../models/user");

module.exports.delete = async function(username) {
    const user = await User.findOneAndDelete({name: username})
    user.save();
    return user;
};