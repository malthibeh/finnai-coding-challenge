const bodyParser = require("body-parser");
const express = require('express');
const mongoose = require('mongoose');
const expressReactViews = require('express-react-views')
const app = express();
require('dotenv').config()

const PORT = process.env.PORT || 3000;

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('json spaces', 40);

var options = { beautify: true };

//Templates Views
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews.createEngine(options));


//Import Routes
var index  = require('./routes/index');
var id  = require('./routes/id');
var users  = require('./routes/users');

//Routes
app.use('/', index);
app.use('/api', id);
app.use('/api', users);


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log("Connected to DB"));

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`)
});


module.exports = app