const User = require("../models/User");

exports.index = async (req, res) => {
    const users = await User.find();
    res.render('index', { users });
}