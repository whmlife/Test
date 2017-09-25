var express = require('express');
var router = express.Router();
var bookDao=require('../Dao/bookDao');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('order');
});
router.post('/information', function(req, res, next) {
 	var name=req.query.name;
	var phone=req.query.phone;
	var weixin=req.query.weixin;
	var city=req.query.city;
	bookDao.insert({name:name,phone:phone,weixin:weixin,city:city},function(result){
			res.json(true);//存入成功
	});
});
module.exports = router;