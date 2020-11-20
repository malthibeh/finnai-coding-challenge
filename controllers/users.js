const User = require("../models/User");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

exports.get_all_users = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(204).send();
    }
};

exports.post_users = async (req, res) => {

    const user = new User({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    })
    const users = await User.find();

    try {
        await user.save();
        res.status(200).render("index", { users })
    } catch (error) {
        res.status(204).send();
    }      
}