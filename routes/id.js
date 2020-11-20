const express = require('express');
const router = express.Router();
const IDController = require("../controllers/id");

router.get('/id', IDController.get_UUID);

module.exports = router;