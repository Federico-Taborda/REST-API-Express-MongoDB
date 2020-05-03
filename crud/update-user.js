require("../connection");

const User = require("../models/user");

module.exports.update = async function(username, name, password , email) {
    const user = await User.findOneAndUpdate({name: username}, {name: name, password: password, email: email});
    user.save();
    return user;
};