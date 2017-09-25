(function(window){
	var $z=$z={};
	
	$z.inheritPrototype=function(SubType,SuperType){
		var prototype = Object(SuperType.prototype);
		prototype.constructor=SubType;
		SubType.prototype=prototype;
	}
	
	$z.getWindowSize=function(){
		
	}
	
	//跨浏览器的事件处理

	 $z.EventUtil = {
	 	//获取事件
		getEvent:function(event){
			var event = event || window.event;
			return event;
		},
		//添加事件
		addHandler:function(ele,type,handler){
			if (typeof ele.addEventListener != "undefined") {
				ele.addEventListener(type,handler,false);
			} else if (typeof ele.attachEvent != "undefined") {
				ele.attachEvent("on"+type,handler);
			}else{
				ele["on"+type]=handler;
			}
		},
		//移除事件
		removeHandler:function(ele,type,handler){
			if (typeof ele.removeEventListener !="undefined") {
				ele.removeEventListener(type,handler,false);
			} else if (typeof ele.detachEvent !="undefined") {
				ele.detachEvent("on"+type,handler);
			}else{
				ele["on"+type] = null;
			}
		},
		//返回事件的目标
		getTarget:function(event){
			return event ? event : window.event;
		},
		//取消事件默认行为
		preventDefault: function(event){
			if (event.preventDefault) {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
		},
		//取消冒泡事件
		stopPropagation: function(event){
			if (event.stopPropagation) {
				event.stopPropagation();
			} else {
				event.cancelable = true;
			}
		}
	};


//	添加class
	$z.addClassName=function(obj,className){
		if(obj.className==''){
			//如果没有class则直接添加一个class名
			obj.className=className;
		}
		else{
				//有class的话则原来的class加上添加的class
				obj.className=obj.className+" "+className;
			}
	}

	//	获取当前元素的样式
	$z.mygetComputedStyle=function(id,mystyle){
		var myDiv = document.getElementById(id);
		var computedStyle = document.defaultView.getComputedStyle(myDiv,null);
		return computedStyle[mystyle];
	}
	$z.getStyle=function(ele,attr){
		if (window.getComputedStyle) {
			return window.getComputedStyle(ele,null)[attr];
		} else {
			return ele.currentStyle[attr];
		}
	}
	
	
	
	//选项卡
	$z.tab=function(navLi,subLi,active){
			for (var i = 0,len = navLi.length; i<len;i++) {
				navLi[i].index = i;
				navLi[i].onclick = function(){
					for (var j = 0; j<len;j ++) {
						navLi[j].classList.remove(active);
						subLi[j].style.display = "none";
					}
					this.classList.add(active);
					subLi[this.index].style.display = "block";
				}
			
			}
	}

	//获取元素的偏移量
	$z.getEleLeft = function(ele){
		var actualLeft = ele.offsetLeft;
		var current = ele.offsetParent;
		while (current !== null ) {
			actualLeft += current.offsetLeft;
			current = current.offsetParent;
		}
		return actualLeft;
	}
	$z.getEleTop=function(ele){
		var actualTop = ele.offsetTop;
		var current = ele.offsetParent;
		while(current !== null){
			actualTop += current.offsetTop;
			current = current.offsetParent;
		}
		return actualTop;
	}

	//检测元素是否位于顶部
	$z.scrollToTop=function(ele){
		if(ele.scrollTop != 0){
			ele.scrollTop = 0;
		}
	}

	//	鼠标拖拽事件
	$z.drag=function(index){
		index.onmousedown=function(event){
		var e=event||window.event;
		e.preventDefault();
		disX=e.clientX-this.offsetLeft;
		disY=e.clientY-this.offsetTop;
		document.onmousemove=function(event){
			var e=event||window.event;
			e.preventDefault();
			var x=e.clientX;
			var y=e.clientY;
			index.style.left=x-disX+'px';
			index.style.top=y-disY+'px';		
		}
	}
		document.onmouseup=function(){
			document.onmousemove=null;
		}
	}

	//获取按键对应的ASCLL码
	// $z.getCharCode=function(event){
	// 	if (typeof event.charCode == "number") {
	// 		return event.charCode;
	// 	} else {
	// 		return event.keyCode;
	// 	}
	// }


	//检测innerText
	//接受一个参数，检查这和元素是不是有textContent属性
	$z.getInnerText=function(ele){
		return (typeof ele.textContent == "string") ?
			ele.textContent : ele.innerText;
	}
	$z.setInnerText=function(ele,text){
		if (typeof ele.textContent == "string") {
			ele.textContent = text;
		} else {
			ele.innerText = text;
		}
	}


	// //	获取dom位置
	// $z.getPosition=function(ele){
	// 		var leftpos=(typeof ele.screenLeft=="number")?ele.screenLeft:screenX;
	// 		var toppos=(typeof ele.screenTop=="number")?ele.screenTop:screenY;
	// }


	//	获取窗口大小,用时自取
	// $z.getViewport=function(){
	// 	if (document.compatMode == "BackCompat") {
	// 		return{
	// 			width:document.body.clientWidth,
	// 			height:document.body.clientHeight
	// 		};
	// 	} else {
	// 		return {
	// 			width:document.documentElement.clientWidth,
	// 			height:document.documentElement.clientHeight
	// 		}
	// 	};
	// }
		
	//创建异步请求
	$z.createXHR=function () {
		var xhr = null;
		if (typeof XMLHttpRequest != "undefined"){
			xhr = new XMLHttpRequest();
		}else{
			xhr = new ActiveXObject("MSXML2.XMLHttp");
		}
		return xhr;
	}
	//异步请求
	$z.ajax=function(method,url,callback,data) {
		var xhr = WZG.createXHR();
		xhr.open(method,url,true);
		xhr.onreadystatechange=function(){
			if (xhr.readyState == 4) {
				if (xhr.status>=200&&xhr.status<300||xhr.status==300) {
					callback(xhr.responseText);
				}else {
					throw new Error("异步请求错误");
				}
			}
		}
		if (data) {
			xhr.send(data);
		}else{
			xhr.send(null);
		}
	}
	
	//在取得某个元素引用的情况下，检测它是否能被querySelector()或all()方法返回
	$z.matchesSelector=function (ele,sel){
		if (ele.matchesSelector) {
			return ele.matchesSelector(sel);
		} else if (ele.msMatchesSelector) {
			return ele.msMatchesSelector(sel);
		} else if (ele.mozMatchesSelector) {
			return ele.mozMatchesSelector(sel)
		} else if (ele.webkitMatchesSelector) {
			return ele.webkitMatchesSelector(sel);
		} else {
			throw new Error("Not supported");
		}
	}
//使用方法
// if(matchesSelector(doucment.body,"body.page1")){
// 	//执行操作
// 



	// $z.getEvent=function(event){
	// 	var event = event || window.event;
	// 	return event;
	// }
	
	
	// //添加事件
	// $z.addHandler=function(ele,type,handler){
	// 	if (typeof ele.addEventListener != "undefined") {
	// 		ele.addEventListener(type,handler,false);
	// 	} else if (typeof ele.attachEvent != "undefined") {
	// 		ele.attachEvent("on"+type,handler);
	// 	}else{
	// 		ele["on"+type]=handler;
	// 	}
	// }

	// //移除事件
	// ZG.removeHandler=function(ele,type,handler){
	// 	if (typeof ele.removeEventListener !="undefined") {
	// 		ele.removeEventListener(type,handler,false);
	// 	} else if (typeof ele.detachEvent !="undefined") {
	// 		ele.detachEvent("on"+type,handler);
	// 	}else{
	// 		ele["on"+type] = null;
	// 	}
	// }
	// //返回事件的目标
	// ZG.getTarget = function(event){
	// 	return event ? event : window.event;
	// }
	





	
	
})(window)
