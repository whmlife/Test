$(function(){
	var $user=$("#user");
	var $phone=$("#phone");
	var $wx=$("#contact");
	var $city=$("#city");
	var $uTip=$(".name");
	var $pTip=$(".tell");
	var $cTip=$(".city");
	var $wTip=$(".wx")
	var $tip_1=$(".uTip");
	var $tip_2=$(".pTell");
	var $tip_3=$(".wTip");
	var $tip_4=$(".cTip");
	var $book=$(".bookSumit");
	var boo1=false;
	var boo2=false;
	var boo3=false;
	var boo4=false;
	function display_1(ele,ele2,ele3,str,class1,class2){
		ele.addClass(class1);
		ele2.addClass(class2);
		ele2.html(str);
		ele3.addClass(class2);
	}
	function display_2(ele,ele2,ele3,class1,class2,boo){
		boo=true;
		ele.removeClass(class1);
		ele2.removeClass(class2);
		ele2.html("");
		ele3.removeClass(class2);
		return boo;
	}
	// function temp(ele,ele2,ele3,str,class1,class2,boo){
	// 	ele.on({
	// 		blur:function(){
	// 			if(ele.val()==""){
	// 				display_1(ele,ele2,ele3,str,class1,class2);
	// 			}else{
	// 				display_2(ele,ele2,ele3,class1,class2,boo);
	// 			}
	// 		}
	// 	});
	// }
	$user.on({
		blur:function(){
			if($user.val()==""){
				display_1($user,$uTip,$tip_1,"请填写姓名","border_1","display");
			}else{
				boo1=display_2($user,$uTip,$tip_1,"border_1","display",boo2);
			}
		}
	});
	$wx.on({
		blur:function(){
			if($wx.val()==""){
				display_1($wx,$wTip,$tip_3,"请填写微信号","border_1","display");
			}else{
				boo3=display_2($wx,$wTip,$tip_3,"border_1","display",boo3);
			}
		}
	});
	$city.on({
		blur:function(){
			if($city.val()==""){
				display_1($city,$cTip,$tip_4,"请填写城市","border_1","display");
			}else{
				boo4=display_2($city,$cTip,$tip_4,"border_1","display",boo4);
			}
		}
	});
	// temp($user,$uTip,$tip_1,"请填写姓名","border_1","display",boo1);
	// temp($wx,$wTip,$tip_3,"请填写微信号","border_1","display",boo3);
	// temp($city,$cTip,$tip_4,"请填写城市","border_1","display",boo4);
	$phone.on({
		blur:function(){
			if($phone.val()==""){
				display_1($phone,$pTip,$tip_2,"请填写手机号码","border_1","display");
			}else{
				if(!(/^1(3|4|5|7|8)\d{9}$/).test($phone.val())){
					display_1($phone,$pTip,$tip_2,"手机号码格式不正确","border_1","display");
				}else{
					boo2 = display_2($phone,$pTip,$tip_2,"border_1","display",boo2);
				}
			}
		}
	});
	$book.on({
		click:function(){
			if(boo1&&boo2&&boo3&&boo4){
				$$.ajax("post","/order/information?name="+$user.val()+"&phone="+$phone.val()+"&weixin="+$wx.val()+"&city="+$city.val(),function(text){
						alert("信息提交成功");
						$user.val("");
						$phone.val("");
						$wx.val("");
						$city.val("");
						window.location.href="/";
				});
			}else{
				alert("信息出错");
			}
		}
	});
});