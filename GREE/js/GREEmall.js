//-----------------滚动
	var m=0;
	var ime;
	var olis=ol1.children;//ol里面的li
	var ulis=ul1.children;
 function move(){   
	ime=setInterval(function(){
		m++;
		if (m==5) m=0; 
		ul1.style.left=-1920*m+"px";
		
		for (var i = 0; i < olis.length; i++) {
			olis[i].className="";
		}
		olis[m].className="now";
	},3000)
}
	move();

	for (var i = 0; i < olis.length; i++) {
			olis[i].index=i;
			olis[i].onclick=function(){
				var index=this.index;
				m=index;
				ul1.style.left=-1920*m+"px";
				for (var j = 0; j < olis.length; j++) {
					olis[j].className=""
				}
				this.className="now";
			}
		}

	for (var i = 0; i < ulis.length; i++) {
		ulis[i].onmouseenter=function(){
			clearInterval(ime);
		}
		ulis[i].onmouseleave=function(){
			move();
		}
	}	

//-------------------列表
var lis=oul.children;
for (var i = 0; i < lis.length; i++) {
	lis[i].onmouseenter=function(){
		
		// for (var j = 0; j < lis.length; j++) {
		// 	lis[j].className="";
		// }
		this.className="current";
	}

	lis[i].onmouseleave=function(){
		this.className="";
	}
}
//--------------------显示与否
$(".main-box>div").hide();
$(".main-over>ul>li").hover(function(){
	$(".main-box>div").eq($(this).index()).fadeIn();
	$(".main-box>div").eq($(this).index()).siblings().hide();
})
$("main>ul>li>img").hover(function(){
	$(".main-box>div").slideUp();
})

//---------------------侧边栏
$("aside>ol>li").click(function(){
	var index=$(this).index();
	$("html,body").animate({'scrollTop':$(".content>div").eq(index).offset().top});
	$(this).addClass("asi").siblings().removeClass("asi");
});

$('aside').hide();
$(window).scroll(function(){
	if($(window).scrollTop()>=($('.content>div').eq(0).offset().top-$('.content>div').height())&&
		$(window).scrollTop()<=($('.content>div').eq(5).offset().top)+$('.content>div').height()){
		$('aside').slideDown();
	}else{
		$('aside').slideUp();
	}
});
function roll(r){
	return $("aside>ol>li").eq(r).addClass("asi").siblings().removeClass("asi");
}
$(window).scroll(function(){
	if($(window).scrollTop()<=($('.content>div').eq(1).offset().top-1)){
		roll(0);
		$("aside>ol>li").eq(0).html('冰箱/洗衣机');
		$("aside>ol>li").eq(1).html('2F');
		$("aside>ol>li").eq(2).html('3F');
		$("aside>ol>li").eq(3).html('4F');
		$("aside>ol>li").eq(4).html('5F');
		$("aside>ol>li").eq(5).html('6F');
	}else if($(window).scrollTop()<=($('.content>div').eq(2).offset().top-1)){
		roll(1);
		$("aside>ol>li").eq(0).html('1F');
		$("aside>ol>li").eq(1).html('空气能热水器');
		$("aside>ol>li").eq(2).html('3F');
		$("aside>ol>li").eq(3).html('4F');
		$("aside>ol>li").eq(4).html('5F');
		$("aside>ol>li").eq(5).html('6F');

	}else if($(window).scrollTop()<=($('.content>div').eq(3).offset().top-1)){
		roll(2);
		$("aside>ol>li").eq(0).html('1F');
		$("aside>ol>li").eq(1).html('2F');
		$("aside>ol>li").eq(2).html('厨房电器');
		$("aside>ol>li").eq(3).html('4F');
		$("aside>ol>li").eq(4).html('5F');
		$("aside>ol>li").eq(5).html('6F');
	}else if($(window).scrollTop()<=($('.content>div').eq(4).offset().top-1)){
		roll(3);
		$("aside>ol>li").eq(0).html('1F');
		$("aside>ol>li").eq(1).html('2F');
		$("aside>ol>li").eq(2).html('3F');
		$("aside>ol>li").eq(3).html('生活电器');
		$("aside>ol>li").eq(4).html('5F');
		$("aside>ol>li").eq(5).html('6F');
	}else if($(window).scrollTop()<=($('.content>div').eq(5).offset().top-1)){
		roll(4);
		$("aside>ol>li").eq(0).html('1F');
		$("aside>ol>li").eq(1).html('2F');
		$("aside>ol>li").eq(2).html('3F');
		$("aside>ol>li").eq(3).html('4F');
		$("aside>ol>li").eq(4).html('格力手机');
		$("aside>ol>li").eq(5).html('6F');
	}else{
		roll(5);
		$("aside>ol>li").eq(0).html('1F');
		$("aside>ol>li").eq(1).html('2F');
		$("aside>ol>li").eq(2).html('3F');
		$("aside>ol>li").eq(3).html('4F');
		$("aside>ol>li").eq(4).html('5F');
		$("aside>ol>li").eq(5).html('家用空调');
	}
})
//----------------------------视频播放
$(".footer-main>ul>li").hover(function(){
	// $(".footer-main>ul>li>img").css("opacity","0.55");
	$(this).children('img').css("opacity","0.55");
	$(this).children().children().css("color","red");
},function(){
	$(".footer-main>ul>li>a>svg").css("color","white");
	$(".footer-main>ul>li>img").css("opacity","1");
})
//---------------------------ihover
$(".content p>i").hover(function(){
	$(this).css({"display":"inlineBlock","borderBottom":"2px solid #cc0000","color":"#cc0000","height":"30px"});
},function(){
	$(this).css({"display":"inlineBlock","borderBottom":"none","color":"#747474"});
})
//----------------------------ihover显示6楼层
$(".content-sixfloor>div").eq(0).show().siblings("div").hide();
$(".content-sixfloor>p>i").hover(function(){
	console.log($(this).index());
	$(".content-sixfloor>div").eq($(this).index()-2).slideDown().siblings("div").fadeOut();
})
//----------------------------ihover显示4楼层
$(".content-foufloor>div").eq(0).show().siblings("div").hide();
$(".content-foufloor>p>i").hover(function(){
	console.log($(this).index());
	$(".content-foufloor>div").eq($(this).index()-2).slideDown().siblings("div").fadeOut();
})
//----------------------------ihover显示3楼层
$(".content-thifloor>div").eq(0).show().siblings("div").hide();
$(".content-thifloor>p>i").hover(function(){
	console.log($(this).index());
	$(".content-thifloor>div").eq($(this).index()-2).slideDown().siblings("div").fadeOut();
})
