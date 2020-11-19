const express = require('express');
const expressReactViews = require('express-react-views')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var options = { beautify: true };

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews.createEngine(options));

var routes  = require('./routes/index');
var users  = require('./routes/users');

app.use('/', routes);
app.use('/api/user', users);


app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`)
})

module.exports = app