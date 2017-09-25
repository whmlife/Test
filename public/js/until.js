(function(window){
	var $$={};
	//创建Ajax
	// IGEEK.createXHR=function(){
	// 	var xhr=null;
	// 	if(typeof XMLHttpRequest !="undefined"){
	// 		xhr = new XMLHttpRequest();
	// 	}else{
	// 		xhr = new ActiveXObject("MSXML2.XMLHttp");
	// 	}
	// 	return xhr;
	// }
	$$={		//创建Ajax
			 createXHR:function(){
					var xhr=null;
					if(typeof XMLHttpRequest !="undefined"){
						xhr = new XMLHttpRequest();
					}else{
						xhr = new ActiveXObject("MSXML2.XMLHttp");
					}
					return xhr;
				},
		   addHandler:function(element,type,handler){
				
				if(element.addEventListener){
					element.addEventListener(type,handler,false);
				}else if(element.attachEvent){
					element.attachEvent("on"+type,handler);
				}else{
					element["on"+type]=handler;
				}
			},
			removeHandler:function(element,type,handler){
				if(element.removeEventListener){
					element.removeEventListener(type,handler,false);
				}else if(element.detachEvent){
					element.detachEvent("on"+type,handler);
				}else{
					element["on"+type]=null;
				}
			},
			getEvent:function(event){
				return event?event:window.event;//判断是哪种浏览器，通过得到的事件判断
			},
			//得到事件目标
			getTarget:function(event){
				return event.target||event.srcElement;//事件的目标
			},
			//取消默认行为
			preventDefault:function(event){
				if(event.preventDefault){//如果event有这个属性
					event.preventDefault();
				}else{
					event.returnValue=false;
				}
			},
			//取消冒泡
			stopPropagation:function(event){
				if(event.stopPropagation){
					event.stopPropagation();
				}else{
					event.cancelBubble=true;
				}
			},
			getRelatedTarget:function(event){
				if(event.relatedTarget){
					return event.relatedTarget;
				}else if(event.toElement){
					return event.toElement;
				}else if(event.fromElement){
					return event.fromElement;
				}else{
					return null;
				}
			},
			getButton:function(event){
				if(document.implementation.hasFeature("MouseEvents","2.0")){
					return event.button;
				}else{
					switch(event.button){
						case 0:
						case 1:
						case 3:
						case 5:
						case 7:
								return 0;
						case 2:
						case 6:
						        return 2;
						case 4:
								return 1;
					}
				}
			},
			//兼容Opera9.5版本以下的鼠标滚轮事件
			getWheelDelta:function(event){
				if(event.wheelDelta){
					return (event.client.engine.opera && event.client.engine.opera<9.5?//opera浏览器且浏览器的版本小于9.5版本，才执行
						-event.wheelDelta:event.wheelDelta);
				}else{
					return -event.detail*40;
				}
			},
			//想跨浏览器的方式取得字符编码
			getCharCode:function(event){
				if(typeof event.charCode=="number"){
					return event.charCode;
				}else{
					return event.keyCode;
				}
			},
			//发送异步请求
			ajax:function(method,url,callback,data){
				var xhr=$$.createXHR();
				xhr.open(method,url,true);
				xhr.onreadystatechange=function(){
					if(xhr.readyState==4){
						if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
							callback(xhr.responseText);//回调函数由其他人去具体实现
						}else{
							throw new Error("请求发生错误");
						}
					}
				};
				if(data){
					xhr.send(data);
				}else{
					xhr.send(null);
				}
			},
			// 动态添加样式
			loadCss:function(url){
				var oLink=document.createElement("link");
				oLink.type="text/css";
				oLink.rel="stylesheet";
				oLink.href=url;
				document.getElementsByTagName('head')[0].appendChild(oLink);
			}
			
			
	};
	window.$$=$$;
})(window);