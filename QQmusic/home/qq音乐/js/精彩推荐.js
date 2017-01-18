// var img=document.querySelector(".missZhang_main li");
// function trans(){
// 	for(var i=0;i<img.length;i++){
// 		img
// 	}
// }
// for(var i=0;i<img.length;i++){
// 	img[i].
// }
// var a=0;
setInterval(function(){
	a++;
	$("img").eq(a-1).css({transform:"translate3d(-381px,0px,-130px)",zIndex:"0",transition:"all .5s linear"})
	$("img").eq(a).css({transform:"translate3d(0px,0px,0px)",zIndex:"1",transition:"all .5s linear"})
	$("img").eq(a+1).css({transform:"translate3d(381px,0px,-130px)",transition:"all .5s linear"})
	if(a==8){
		a=-1
	}
},4000)
