var dbUtil=require('./mongodbUtil');
function userDao(){}
userDao.prototype.insert=function(doc,callback){
	dbUtil.insertDocument("user",doc,callback);
}
userDao.prototype.find=function(user,callback){
	dbUtil.findOne("user",{name:user},{},callback);
}
module.exports=new userDao();