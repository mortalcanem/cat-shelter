var express = require('express');
var router = express.Router();
const cats = require('../data/cats.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("the cats are ", cats)
  res.send('respond with a resource this is neat');
});

module.exports = router;
