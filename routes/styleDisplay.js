var express = require('express');
var router = express.Router();
var theme=require("../Dao/theme");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('styleDisplay');
});
router.post('/theme', function(req, res, next) {
  var id=req.query.id;
  console.log(id);
  theme.find(id,function(result){
  	res.json(result);
  });
});
module.exports = router;