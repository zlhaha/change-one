//无缝轮播	!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	var i=0;
	var aa=$(".aa");
	var other=$(".bb").slice(0,1).clone();	//克隆第一组显示区域的图片
	$(".zl-head").append(other).width($(".bb").length*($(".bb").width()));    //改变图片组的宽度
	$('.zl-right').click(function(){
		i+=1;
		aa.css("borderColor","black");
		if(i==$('.bb').length){
			i=1;
			$('.zl-head').css({left:0});
		}     //跳过克隆的图片组，显示第一位置的图片组，达到无缝轮播效果
		$('.zl-head').stop().animate({left:-i*1000},"slow");
		aa.eq(i).css("borderColor","white");
	});

	$('.zl-left').click(function(){	
		i-=1;
		aa.css("borderColor","black");
		if(i==-1){
			i=$(".bb").length-2;
			$('.zl-head').css({left:-($(".bb").length-1)*1000});
		}
		$('.zl-head').stop().animate({left:-i*1000},"slow");	
		aa.eq(i).css("borderColor","white");
	});



//文字悬浮
	var zlli=$('.zll-list');
		zlli.hover(function(){
			$(this).css("color","white");
		},
		function(){
			$(this).css("color","");
		});
//图片悬浮效果  
//显示播放图标
	var zl=$(".zl");
	var same=$(".same");
		same.hover(function(){
			$(this).children(":last").fadeIn("3000");
			
		},
		function(){
			$(this).children(":last").fadeOut("3000");
			
		})
//文字背景
	var kuai=$(".kuai");
		kuai.hover(function(){
			$(this).children(":last").css({"background-color":"#31C27C"});
			$(this).children(":last").children().css("background-position","-180px -100px")			
		},
		function(){
			$(this).children(":last").css({"background-color":""});
			$(this).children(":last").children().css("background-position","180px 100px")
		
	})

//鼠标点击跟踪显示     !!!!!!！！！！！！！！！！！！！
	var zlphoto=$(".zl-photo");
			zlphoto.click(function(e){
				var pointX=e.pageX;
				var pointY=e.pageY;
				e.stopPropagation();   // 清除页面对点击事件的影响，防止目元素隐藏
				$(".zl-float").css({"display":"block","top":e.pageY,"left":e.pageX});
			})
//点击区域外隐藏目标事件！！！！！！！！！！！！！！！！！
	$(document).click(function(){
		$(".zl-float").hide();
	})

//点击鼠标列表的hover背景改变

	$(".numone").hover(function(){
		$(".zl-one").css("background-position","-20px -20px");
		$(".zl-three").css("background-position","0px -20px");

	},
	function(){		
		$(".zl-one").css("background-position","-20px 0px");	
		$(".zl-three").css("background-position","0px 0px");	
	})

	$(".numtwo").hover(function(){		
		$(".zl-four").css("background-position","-140px -180px");
		$(".zl-seven").css("background-position","0px -20px");
	},
	function(){
		
		$(".zl-four").css("background-position","-140px -200px");
		$(".zl-seven").css("background-position","0px 0px");
	})

	$(".numthree").hover(function(){
		$(".zl-eight").css("background-position","-40px -240px");
		$(".zl-ten").css("background-position","0px -20px");
	},
	function(){
		$(".zl-eight").css("background-position","-40px -220px");
		$(".zl-ten").css("background-position","0px 0px");
		
	})

//线条点击事件	！！！！！！！！！！！	
	aa.eq(0).css("borderColor","white");
		aa.click(function(){
			var index=$(this).index();
			$('.zl-head').animate({left:-index*1000},"slow");
			aa.css("borderColor","black");		
			$(this).css("borderColor","white");
		})


//按钮悬浮样式事件
//左按钮   （CSS3与Jquey结合使用）！！！！！！
	$('.zl-both').hover(function(){
		$(".zl-left").width(100);
		$(".zl-span").css("display","block");

	},
	function(){
		$(".zl-left").width(0);
		$(".zl-span").css("display","none");
	
	})

	$(".zl-left").hover(function(){
		$(this).width(120);
		$(this).css("backgroundColor","#31C27C");

	},
	function(){
		$(this).width(100);
		$(this).css("backgroundColor","");
	})

//右按钮
	$('.zl-both').hover(function(){
		$(".zl-right").width(100);
		$(".zl-spanz").css("display","block");	
	},
	function(){
		$(".zl-right").width(0);
		$(".zl-spanz").css("display","none");
		
	
	})

	$(".zl-right").hover(function(){
		$(this).width(120);
		$(this).css("backgroundColor","#31C27C");

	},
	function(){
		$(this).width(100);
		$(this).css("backgroundColor","");
	})