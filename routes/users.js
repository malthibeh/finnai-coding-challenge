const express = require('express');
const router = express.Router();
const UserController = require("../controllers/users");

/* users routes. */
router.get('/user', UserController.get_all_users);
router.post('/user', UserController.post_users);

module.exports = router;
