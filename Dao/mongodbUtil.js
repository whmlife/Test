//  Mongdb的工具(非关系型的数据库)
var Client = require('mongodb').MongoClient;
function Mongodb(){
	this.url='mongodb://localhost:27017/mydb';
}
Mongodb.prototype.connect=function(callback){
	var that=this;
	Client.connect(this.url,function(err,db){
		if(err){
			console.log(err);
		}else{
			that.db=db;
			callback();
		}
	});//Client有connect的方法
}
Mongodb.prototype.close=function(){
	this.db.close();
}
Mongodb.prototype.insertDocument=function(collectionName,doc,callback){
	var that=this;
	this.connect(function(){
		var collection=that.db.collection(collectionName);
		collection.insertOne(doc,function(err,result){
			if(err){
				console.log(err);
			}else{
				callback(result);
			}
			that.close();
		});
	});
}
Mongodb.prototype.insertDocuments=function(collectionName,docs,callback){
	var that=this;
	this.connect(function(){
		var collection = that.db.collection(collectionName);
		collection.insertMany(docs,function(err,result){
			if(err){
				console.log(err);
			}else{
				callback(result);
			}
			that.close();
		});
	});
}
Mongodb.prototype.findAllDocuments=function(collectionName,callback){
	var that=this;
	this.connect(function(){
		var collection=that.db.collection(collectionName);
		collection.find({}).toArray(function(err,result) {
	    if(err){
	    	console.log(err);
	    }else{
	    	callback(result);
	    }
	    that.close();
	  });
	});
}
Mongodb.prototype.update = function(collectionName,filter,update,callback){
	var that = this;
	this.connect(function(){
		var collection = that.db.collection(collectionName);
		collection.updateOne(filter,update,function(err,result){
			if(err){
				console.dir(err);
			}else{
				callback(result.result.nModified);
			}
			that.close();
		});
	});
}

Mongodb.prototype.findOne=function(collectionName,query,options,callback){
	var that = this;
	this.connect(function(){
		var collection = that.db.collection(collectionName);
		collection.findOne(query,options)
							.then(function(doc){
								callback(doc);
							});
	});
}
Mongodb.prototype.findPartDocuments=function(collectionName,query,options,callback){
	var that = this;
	this.connect(function(){
		var collection = that.db.collection(collectionName);
		collection.find(query)
							.project(options)
							.toArray(function(err,result){
								callback(result);
							});
	});
}

module.exports=new Mongodb();