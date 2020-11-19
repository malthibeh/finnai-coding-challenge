var express = require('express');
var router = express.Router();

let users = [
  {
    id: '1',
    name: 'Mohamed Wieruch',
    email: "test1@gmail.com"
  },
  {
    id: '2',
    name: 'Tim Davids',
    email: "test2@gmail.com"
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/* GET users listing. */
router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {

  if(getRandomInt(2) == 0){
    res.send('respond failed');
  }else{
    res.send('respond success');
  }
  
});

module.exports = router;
