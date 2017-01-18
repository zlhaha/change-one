$(function(){
		var i=0;
		var four=$('.hotSongList li').slice(0,4).clone();//克隆前4张图片,用于当点击最后一个时防止视觉空白伪装
		$('.hotSongList ul').append(four).width($('.hotSongList li').length*($('.hotSongList img').width()));//改变.hotSongList宽度
		$('.rightButton').click(function(){
			next();
		});
		function next(){
			i+=4;
			if(i==$('.hotSongList li').length){ //当在最后一张图上点击时，偏移量归零
				i=4;//跳过伪装的前4个
				$('.hotSongList ul').css({left:0});
			}
			//点击时，整个.hotSongList的偏移量向左移动i个图片的宽度
			$('.hotSongList ul').stop().animate({left:-i*300},800);
			console.log($('.hotSongList ul').position().left);
		}
		$('.leftButton').click(function(){
			prev();
		});
		function prev(){
			i-=4;
			if(i==-4){
				i=$('.hotSongList li').length-8;
				$('.hotSongList ul').css({left:-($('.hotSongList li').length-4)*300});
			}
			$('.hotSongList ul').stop().animate({left:-i*300},800);
		}
		//背景颜色
		$('.imgText:even').css({'background-color':'#333333'});
		$('.imgText:odd').css({'background-color':'#414141'});
		//左右按钮颜色
		$('.hotSongFather').hover(
			function(){
				$('.leftButton').animate({left:'0px'},300);
				$('.rightButton').animate({right:'0px'},300);
			},
			function(){
				$('.leftButton').animate({left:'-74px'},300);
				$('.rightButton').animate({right:'-74px'},300);
			}
		);
		//底部按钮
		$('.HSFooter a i').first().css({'background-color':'#151515'});
		$('.HSFooter a').click(function(){
			$('.HSFooter a i').css({'background-color':'#B9B9B9'});
			$(this).children().css({'background-color':'#151515'});
			next();
		});
		//联动底部按钮
		// function colorChange();
		
})
	
