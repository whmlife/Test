var dbUtil=require('./mongodbUtil');
function bookDao(){}
bookDao.prototype.insert=function(doc,callback){
	dbUtil.insertDocument("book",doc,callback);
}
bookDao.prototype.find=function(book,callback){
	dbUtil.findOne("book",{name:book},{},callback);
}
module.exports=new bookDao();