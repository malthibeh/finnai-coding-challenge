const express = require('express');
const router = express.Router();
const User = require("../models/User");


/* GET home page. */
router.get('/', async (req, res) => {
    
    const users = await User.find();
    res.render('index', { users });
});

module.exports = router;