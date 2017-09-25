!(function($){
	var scrollTop=$(window).scrollTop();
	$(".foot").click(function(){
		$("html,body").animate({
			scrollTop:"0"
		},300);
	});
	$(window).on({
        scroll:function(){
            var scrollTop2=$(window).scrollTop();
            if(scrollTop2!=0){
            		$(".fixed").css({
	           		top:scrollTop2,
	           		transition:".5s"
           		});
            }else{
            		$(".fixed").css({
	           		top:"",
	           		transition:".5s"
           		});
            }
    		}
   });
//	点击箭头更换信息
	var $picList = $(".pic-list>li"),
		num = $picList.length,
		$txtList = $(".txt-list>li"),
		curIndex = 0,
		$num = $(".show-list>.row");
	var $picList2 = $(".pic-list2>li"),
		num2 = $picList2.length,
		$txtList2 = $(".txt-list2>li"),
		curIndex2 = 0,
		$num2 = $(".show-list2>.row");	
	function show(index,ele_1,ele_2){
		ele_1.eq(index).addClass("show").siblings().removeClass("show");
		ele_2.eq(index).addClass("show").siblings().removeClass("show");
	}
	function seleNum(curIndex_1,num_1,ele_1,ele_2){
		if (curIndex_1 >= num_1-1) {
			curIndex=0;
			show(curIndex_1,ele_1,ele_2);
		} else{
			curIndex++;
			show(curIndex_1,ele_1,ele_2);
		}
	}
	$(".arrow").click(function(){
		seleNum(curIndex,num,$picList,$txtList);
	});
	$(".arrow2").click(function(){
		if (curIndex2 >= num2-1) {
			curIndex2=0;
			show(curIndex2,$picList2,$txtList2);
		} else{
			curIndex2++;
			show(curIndex2,$picList2,$txtList2);
		}
	});

	//参团详情
	var $go_1=$(".go");
	var $go_2=$(".go2");
	var boo=true;
	var boo2=true;
	appear(".go",".goImg_1",boo,"display");
	appear(".go2",".goImg_2",boo2,"display");
	function appear(ele,ele2,boo,className){
		$(ele).on({
			click:function(){
				if(boo){
					$(ele2).addClass(className);
					boo=false;
				}else{
					$(ele2).removeClass(className);
					boo=true;
				}
			}
		});
	}
	//查看详情
	$(".look1").on("click",function(){
		$(this).parents("li.show").find(".details").toggleClass("show");
	});
	
	
	//左边详情选项卡
	jQuery.tabs = function(ele1,ele2){
		$(ele1).on("click",function(){
			var index = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
//			$(ele2).eq(index).addClass("active").siblings().removeClass("active");
			$(ele2).css({
				left: -100 * index +"%"
			});
		});
	}
	jQuery.close = function(elem1,elem2){
		$(elem1).on("click",function(){
			$(this).parents("li.show").find(elem2).removeClass("show");//关闭当前展开详情，查找到当前的父级，然后找到该父级下的当前详情页
//			$(elem2).removeClass("show");//关闭所有展开的详情，因为类名字一样所有，只要展开的都会关闭
		})
	}
	jQuery.close(".details .close",".details")
	jQuery.tabs(".nav-list",".card");
})(jQuery);