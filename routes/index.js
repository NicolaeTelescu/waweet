var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = { title: 'I am very hungry' };
  res.render('index', { params: JSON.stringify(data).replace(/<\//g, "<\\/")});
});

module.exports = router;
