//轮播
var i=new Array(6);
for(var x=0;x<i.length;x++){
	i[x]=x+1;
}
function bannerRight(){
	for(var x=0;x<i.length;x++){
		if(i[x]<6){
			i[x]++;
		}
		else{
			i[x]=1;
		}
		$('li').eq(x).removeClass();
		$('li').eq(x).addClass('l'+i[x]);
	}
}
function bannerLeft(){
	for(var x=0;x<i.length;x++){
		if(i[x]>1){
			i[x]--;
		}
		else{
			i[x]=6;
		}
		$('li').eq(x).removeClass();
		$('li').eq(x).addClass('l'+i[x]);
	}
}
var timer=setInterval('bannerRight()',2000);
/*左右按钮动作*/
$('.leftButton').click(function(){
	bannerLeft();
});
$('.rightButton').click(function(){
	bannerRight();
	console.log('sdf');
});
$('.allButton').hover(
	function(){
		clearInterval(timer);
	},
	function(){
		timer=setInterval('bannerRight()',2000);
	}
);
/*左右按钮颜色*/
$('.RecommendFather').hover(
	function(){
		$('.leftButton').animate({left:'0px'},300);
		$('.rightButton').animate({right:'0px'},300);
	},
	function(){
		$('.leftButton').animate({left:'-74px'},300);
		$('.rightButton').animate({right:'-74px'},300);
	}
);