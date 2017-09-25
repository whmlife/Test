$(function(){
	var top=0;//滚动条的高度
	var dir;//滚轮的方向
	$(window).on("mousewheel",function(){
		event.preventDefault();
		if(event.wheelDelta>0){
			dir = -1;
		}else{
			dir = 1;
		}
		top = top + dir*100;
		$("html,body").stop().animate({
			scrollTop:top+"px"
		},800);
	});
	$(window).on({
        scroll:function(){
            var scrollTop=$(window).scrollTop();
            console.log(scrollTop);
            if(scrollTop>20){
            		loading(".current img");
            		loading(".work img");
            }
            if(scrollTop>=80){
            		loading(".carousel-inner img");
            		loading(".work img");
            		loading(".view img");
            }
            if(scrollTop>=100){
            		loading(".guest img");
            		loading(".foot img");
            }
     	}
    })
	function loading(selector){
	 	$(selector).each(function(){
        $(this).attr("src",$(this).attr("data-src"))
    })
	}
    $(".toTop").on("click",function(){
     $("html,body").animate({
      scrollTop: 0
     },600)
    });
});