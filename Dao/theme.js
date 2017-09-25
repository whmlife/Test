var dbUtil=require('./mongodbUtil');
function Theme(){}
Theme.prototype.insertDocs=function(docs,callback){
	dbUtil.insertDocuments("theme",docs,callback);
}
Theme.prototype.find=function(id,callback){
	dbUtil.findOne("theme",{id:id},{},callback);
}
module.exports=new Theme();