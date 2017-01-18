
// for(var i=0;i<$(".img").length;i++){ 
	// 	$(".missZhang_imgall .img").eq(i).hover(function(){
	// 		$(this).children(":last").css({backgroundSize:"70px",transition:"backgroundSize 1s linear",display:"block"});

	// 	},
	// 		function(){
	// 		$(this).children(":last").css({backgroundSize:"54px",transition:"backgroundSize 1s linear",display:"none"});
	// 	});
	// }
	// for(var i=0;i<$(".missZhang_nav a").length;i++){
	// 	$(".missZhang_nav a").eq(i).click(function(){
	// 		$(".missZhang_imgall").append("<ul><li><a href="" class="img"><img src="img/0 2.jpg"><b class="play"></b></a><br><a href="">微白城市（Winter song）</a><br><li><a href="" class="img"><img src="img/0 2.jpg"><b class="play"></b>
	// 						</a><br><a href="">欢乐中国年+有钱没钱回家过年</a><br>
	// 						<a href="" class="name">柳岩</a><p><b></b>3228</p></li><li><a href="" class="img">img src="img/0 3.jpg"><b class="play"></b>
	// 						</a><br><a href="">仰望</a><br><a href="" class="name">李琦</a>
	// 						<p><b></b>7796</p></li><li><a href="" class="img">
	// 							<img src="img/0 4.jpg">
	// 							<b class="play"></b>
	// 						</a><br>
	// 						<a href="">自饰者（练习室舞蹈版）</a><br>
	// 						<a href="" class="name">张碧晨</a>
	// 						<p><b></b>4.2万</p>
	// 					</li>
	// 					<li>
	// 						<a href="" class="img">
	// 							<img src="img/0 5.jpg">
	// 							<b class="play"></b>
	// 						</a><br>
	// 						<a href="">서로의 눈물이 되어</a><br>
	// 						<a href="" class="name">효린</a>
	// 						<p><b></b>8940</p>
	// 					</li>
	// 					<li>
	// 						<a href="" class="img">
	// 							<img src="img/0 6.jpg">
	// 							<b class="play"></b>
	// 						</a><br>
	// 						<a href="">서로의 눈물이 되어</a><br>
	// 						<a href="" class="name">효린</a>
	// 						<p><b></b>8940</p>
	// 					</li>
	// 					<li>
	// 						<a href="" class="img">
	// 							<img src="img/0 7.jpg">
	// 							<b class="play"></b>
	// 						</a><br>
	// 						<a href="">你好灰姑娘</a><br>
	// 						<a href="" class="name">胡夏</a>
	// 						<p><b></b>3.5万</p>
	// 					</li>
	// 					<li>
	// 						<a href="" class="img">
	// 							<img src="img/0 8.jpg">
	// 							<b class="play"></b>
	// 						</a><br>
	// 						<a href="">分手看看</a><br>
	// 						<a href="" class="name">郭静</a>
	// 						<p><b></b>1.4万</p>
	// 					</li>
	// 				</ul>")
	// 	})
	// }
	// console.log($(".missZhang_nav a").eq(i));
	// console.log($(".missZhang_imgall").eq(i)).css("display","")
	var nav=document.querySelectorAll(".missZhang_nav a");
	var missZhang_imgall =document.querySelectorAll(".missZhang_imgall");
	// console.log(missZhang_imgall)
// for(var i=0;i<nav.length;i++){
// 	nav[i].index=i;
// 	nav[i].onclick=function(){
// 		for(var x=0;x<nav.length;x++){
// 			missZhang_imgall[x].style.display="none";
// 		}
// 		missZhang_imgall[this.index].style.display="block";
// 		console.log(missZhang_imgall[this.index])
// 		// console.log(missZhang_imgall[this.index])
// 	}
// }
	$(".missZhang_nav a").click(function(){
		var index=$(this).index();
		$(".missZhang_nav a").css("color","gray");
		$(this).css("color","black");
		$(".missZhang_imgall").css("display","none");
		$(".missZhang_imgall").eq(index).css("display","block");
	})
		
		$(".img").hover(function(){
			$(this).children(":last").fadeIn(1000);
		},
			function(){
			$(this).children(":last").fadeOut(1000);
		})
console.log($(".play").width())
