var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let query = req.query;
  console.log(`rows:${query.rows}`)
  consolew.log(`cols:${query.cols}`)
  res.render('board', { title: 'Board  Display',query:query })
});

module.exports = router;

