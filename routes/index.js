const express = require('express');
const path = require("path");
const router = express.Router();

const { v4: uuidv4 } = require('uuid');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: 'John' });
});

router.get('/api/id', function(req, res, next) {
  res.send(uuidv4());
});

module.exports = router;
