var toReg = document.getElementsByClassName("toReg")[0];
var toLogin = document.getElementsByClassName("toLogin")[0];
var left = document.getElementsByClassName("info")[0].style.left;
toReg.onclick = function(){
 document.getElementsByClassName("info")[0].style.left = "0%";
}
toLogin.onclick = function(){
 document.getElementsByClassName("info")[0].style.left = "-100%";
}
window.onload=function(){
		var rBtn=document.getElementById("submit");//注册
		var lBtn=document.getElementById("submit2");//登录
		var user=document.getElementById("name");
		var pwd=document.getElementById("psd");
		var user2=document.getElementById("name2");
		var lPwd=document.getElementById("psd2");
		var pwd2=document.getElementById("comfirmpsd");
		var userTip=document.getElementById("tip1");
		var pwdTip=document.getElementById("tip2");
		var pwd2Tip=document.getElementById("tip3");
		var loginTip=document.getElementById("tip5");
		var foo=false;
		var foo2=false;
		var foo3=false;
		var foo4=false;
		var foo5=false;
		// console.log(user.value);
		$$.addHandler(rBtn,"click",registerEvent);
		$$.addHandler(lBtn,"click",loginEvent);//login按钮
		function loginEvent(){
			var p=new RegExp(user2.dataset.pattern);
			if(p.test(user2.value)){
					foo4=true;
			}
			var p2=new RegExp(lPwd.dataset.pattern);
				if(p2.test(lPwd.value)){
					foo5=true;
			}
			if(foo4&&foo5){
					var xhr = $$.createXHR();
					xhr.open('get',"/login/login?user="+user2.value+"&pwd="+lPwd.value,true);//取数据
					xhr.onreadystatechange=function(){
						if(xhr.readyState==4){
							if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
									var json = JSON.parse(xhr.responseText);
									console.log(json+"--------");
									if(json){
										alert("提交成功");
										window.location.href="/";
									}else{
										lPwd.value="";
										loginTip.innerText="密码不正确";
										loginTip.style.color="red";
										$.addHandler(lPwd,"focus",function(){
											loginTip.innerText="";
										});
									}
							}
						}
					};
					xhr.send(null);
			}
		}
		function registerEvent(){
			// alert(111);
			// console.log(user.value);
			var p=new RegExp(user.dataset.pattern);
			if(p.test(user.value)){
				foo=true;
			}else{
				userTip.innerText="用户名格式不正确";
				userTip.style.color="red";
			}
			var p2=new RegExp(pwd.dataset.pattern);
			if(p2.test(pwd.value)){
				foo2=true;
			}else{
				pwdTip.innerHTML="密码格式不正确";
				pwdTip.style.color="red";
			}
			if(pwd2.value==pwd.value){
				foo3=true;
			}else{
				pwd2Tip.innerHTML="两次密码不符";
				pwd2Tip.style.color="red";
			}
			if(foo&&foo2&&foo3){
				// console.log(foo&&foo2&&foo3);
						var xhr = $$.createXHR();
						xhr.open('post',"/login/register?user="+user.value+"&pwd="+pwd.value,true);
						xhr.onreadystatechange=function(){
							if(xhr.readyState==4){
								if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
									
									var json = JSON.parse(xhr.responseText);
									console.log(json);
									if(json){
										// console.log(json);
										userTip.innerText="用户名已存在";
										userTip.style.color="red";

										$$.addHandler(user,"focus",function(){
											userTip.innerText="2~9个字符，仅限数字、字母";
											userTip.style.color="";
										});
										pwd.value="";
										pwd2.value="";
									} else{
										// 跳到登录界面
										document.getElementsByClassName("info")[0].style.left = "-100%";
										userTip.innerText="";
										pwdTip.innerHTML="";
										pwd2Tip.innerHTML="";
										$.addHandler(lBtn,"click",loginEvent);//login按钮
									}
								}
							}
						};
						xhr.send(null);
			}else{
				alert("error");
			}
		}
	}
		