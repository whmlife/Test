$(function(){
	var regex = {
			/**  user:代表用户的检测********** space:检测是否含有空格 ******** e_mail:检测邮箱******** mobile：检测手机格式******* pwd:检测密码*******/
			user:/^[a-zA-z][a-zA-Z0-9_]{2,9}$/,
			space:/\s/,
			e_mail:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,    
			mobile: /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/,
			pwd:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
		}	
	//focus blur
	var str,str2,str3,str4,str5;
	var oPwd=false;//只有密码输入的格式正确，才能再一次输入密码验证用户是否记住密码，因此用标记oPwd
	function changeInput(selector,Regex,tipSelector,txt1,txt2){
		$(selector).on({
			focus:function(){
				var $this = $(this);
				$this.addClass("activeBorder activeBg");
				if(!str) str = $this.val();
				if ($this.val() === str) $this.val("");
			},
			blur:function(){
				var $this=$(this); 
				var $tipSelector=$(tipSelector);                                                                                                  
				$this.removeClass("activeBorder activeBg");
				if($this.val()!=""){
					if(Regex.test($this.val())){
						$tipSelector.html("");
					}else{
						$tipSelector.html(txt1);
						$tipSelector.addClass("tipColor");
					}
				}else{
					$this.val(str);
					$tipSelector.html(txt2);
					$tipSelector.addClass("tipColor");
				}
			}
		});
	}
	changeInput("#user",regex.user,".tip","用户名格式不正确","用户名不能为空");
	changeInput("#phone",regex.mobile,".tip4","手机号码格式不正确","手机号码不能为空");
	$("#pwd").on({
		focus:function(){
			var $this=$(this);
			$this.prop({"type":"password"});
			$this.addClass("activeBorder activeBg");
			if(!str2) str2 = $this.val();
			if ($this.val() === str2) $this.val("");	
		},
		blur:function(){
			var $this=$(this);
			var $tipSelector=$(".tip2");
			$this.removeClass("activeBorder activeBg");
			if($this.val()!=""){
				if(regex.pwd.test($this.val())){
					$tipSelector.html("");
					oPwd=true;
				}else{
					$tipSelector.html("格式不正确");
					$tipSelector.addClass("tipColor");
				}
			}else{
				$this.prop({"type":"text"});
				$this.val(str2);
				$tipSelector.html("密码不能为空");
				$tipSelector.addClass("tipColor");
			}
		}
	});
	$("#truePwd").on({
		focus:function(){
			var $this=$(this);
			$this.prop({"type":"password"});
			$this.addClass("activeBorder activeBg");
			if(!str3) str3 = $this.val();
			if ($this.val() === str3) $this.val("");	
		},
		blur:function(){
			var $this=$(this);
			var $tipSelector=$(".tip3");
			$this.removeClass("activeBorder activeBg");
			if($this.val()!=""){
				console.log(oPwd);
				console.log($this.val() == $("#pwd").val() ? true : false);
				if(oPwd&&$this.val() == $("#pwd").val()){
					$tipSelector.html("");
				}else{
					$tipSelector.html("请再一次输入密码");
					$tipSelector.addClass("tipColor");
				}
			}else{
				$this.prop({"type":"text"});
				$this.val(str3);
				$tipSelector.html("密码不能为空");
				$tipSelector.addClass("tipColor");
			}
		}
	});
	$("#prove").on({
		focus:function(){
			var $this = $(this);
			$this.addClass("activeBorder activeBg");
			if(!str5) str5 = $this.val();
			if ($this.val() === str5) $this.val("");
		},
		blur:function(){
			var $this=$(this); 
			var $tipSelector=$(".tip5");                                                                                                  
			$this.removeClass("activeBorder activeBg");
			if($this.val()!=""){
				if($(this).val() == $("#pNumber").html()){
					console.log($("#pNumber").html());
					$tipSelector.html("");
				}else{
					$tipSelector.html("验证码不正确");
					$tipSelector.addClass("tipColor");
				}
			}else{
				$this.val(str5);
				$tipSelector.html("验证码不能为空");
				$tipSelector.addClass("tipColor");
			}
		}
	});
});