var express = require('express');
var router = express.Router();
var userDao = require('../Dao/userDao');
var cookie = require('cookie');
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('login');
});
router.post('/register', function(req, res, next) {
	var user = req.query.user;
	var pwd = req.query.pwd;
	userDao.find(user, function(result) {
		console.log(result);
		if (result) {
			res.json(true); //该用户存在
		} else {
			res.json(false);
			userDao.insert({
				name: user,
				id: pwd
			}, function(result) {
				// res.json(result);
			});
		}
	});
});
router.get('/login', function(req, res, next) {
	var user = req.query.user;
	var pwd = req.query.pwd;
	userDao.find(user, function(result) {
		console.log(pwd);
		console.log(result.id);
		if (result.name === user && result.id === pwd) {
			res.cookie('username', user, {
				domain: "www.whmlife.com",
				expires: new Date(Date.now() + 604800000)
			});
			res.json(true); //输入的密码，与之前注册的密码相同
		} else {
			// 输入密码有误
			res.json(false);
		}
	});
});
module.exports = router;