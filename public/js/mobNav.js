$(function(){
	$(".mob-nav").click(function(){
		$(".t2").toggleClass("disappear");
		$(".t1").toggleClass("rotate1");
		$(".t3").toggleClass("rotate2");
		$(".mob-down").slideToggle();
	});
});