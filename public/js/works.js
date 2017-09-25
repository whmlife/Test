



		
		function getLi(url,index,size){
			$.ajax({
				type:"get",
				url:url,
				dataType:"json",
				async:true,
				success:function(reponse){
					var data = reponse.list,
						len = reponse.list.length,
						result = "";
						
					if (len - index < size) {
						size = len - index;
					}
					
					for (var x = index; x < (index + size); x++ ) {
						result += '<li><a href="' + data[x].href + '" target="_blank"> <img src="' + data[x].src +'" /><i class="seach"></i></a>' + '<h4>' + data[x].tit + '</h4></li>' ;
					}
					
					$(".work-list").append(result);
					
					if ( (index + size) >= len ) {
						more.classList.add("hide");
					} else{
						more.classList.remove("hide");
					}
				},
				
				error:function(xhr,type){
					alert("错误！")
				}
				
			});
			
				
			}
		
var more = document.getElementById("more"),
			count = 0,//计数器
			start = 0,//index，加载后的数量
			addSize = 4;//size 每次加载的数量
		
		getLi("/json/worklist.json",start,addSize);
		
		more.onclick = function(){
			count++;
			start =  count * addSize;
			getLi("/json/worklist.json",start,addSize)


			$("body,html").animate({
				scrollTop:$("body").height()
			},1000);
			console.log($("body").height())
		}
			$("#toTop").find("span").click(function(){
				$("body,html").animate({
					scrollTop:0
				},1000)
			});