//--------------------------------隐藏
$(".header-hiding").hide();
$(".gle").hide();
$(".header-main>ul>li").eq(1).hover(function(){
	$(".gle").slideDown();
	$(".header-hiding").slideDown();
})
$(".header-main>ul>li").eq(1).siblings().hover(function(){
	$(".gle").fadeOut();
	$(".header-hiding").fadeOut();
})
//--------------------------------滚动
var m=0;
var ime;
function move(){
	ime=setInterval(function(){
		m++;
		if(m==2) m=0;
		$("main>ul").stop().animate({"left":-1920*m+"px"});
		$("main>ol>li").eq(m).addClass("change").siblings().removeClass("change");
	},3000)	
}
move();

$("main>ol>li").click(function(){
	$(this).addClass("change").siblings().removeClass("change");
	var index=$(this).index();
	m=index;
	$("main>ul").animate({"left":-1920*m+"px"});
})
//--------------------------------banner滚动
var o=0;
var me;
function ove(){
	me=setInterval(function(){
		o++;
		if(o==4) o=0;
		$(".banner>ul").css("left",-1920*o+"px");
		// $(".banner>ul>li>img").fadeIn();
		$(".banner>ol>li").eq(o).css("background",'url("images/He_buttom1.png")').siblings().css("background",'url("images/He_buttom.png")');
	},3000)
}
ove();

$(".banner>ol>li").click(function(){
	$(this).css("background",'url("images/He_buttom1.png")').siblings().css("background",'url("images/He_buttom.png")');
	var b=$(this).index();
	o=b;
	$(".banner>ul").css("left",-1920*o+"px");
})
//--------------------------------case滚动
$('.case>div>ul a').click(function(){
	$(this).parent().parent().stop().animate({"left":-1920+"px"},1500);
	return false;
})
$('.case>div>ul>li>span').click(function(){
	$(this).parent().parent().stop().animate({"left":0+"px"},1500);
})
//--------------------------------case-bottom滚动
var g=0;
$(".case .right").click(function(){
	g++;
	if (g>=6) return false;
	$(".case ol").stop().animate({'left':-293*g+'px'});
	// console.log(g);
})
$(".case .left").click(function(){
	g--;
	if (g<=-1) return false;
	$(".case ol").stop().animate({'left':-293*g+'px'});
})
//-------------------------------------------Totop
$(".Totop").click(function(){
	// console.log($('.content').offset().top);
	$('html,bpdy').animate({'scrollTop':$('.content').offset().top})
})

$(".Totop").hide();
$(window).scroll(function(){
	// console.log($('.case').offset().top);
	if ($(window).scrollTop()>=($('.case>div').eq(0).offset().top-$('.case>div').height())&&
		$(window).scrollTop()<=($('.case>div').eq(4).offset().top+$('.case>div').height()*0.3)
		) {
			$(".Totop").slideDown();
		}else{
			$(".Totop").slideUp();
		}
})
//--------------------------------case-bottom  hover显示
// $('.case ol>li>div').eq(0).show();
// $('.case ol>li>div').eq(1).hide();

$('.case ol>li').hover(function(){
	console.log(111)
	$(this).children('div').eq(1).show();
	$(this).children('div').eq(0).hide();
	// console.log($(this).children().index());
	// console.log($(this).children().eq(1));
},function(){
	$(this).children('div').eq(0).show();
	$(this).children('div').eq(1).hide();
})

//----------------------------------点击到达相应的case
$(".content-list>ul>li").click(function(){
	$('html,bpdy').animate({'scrollTop':$('.case>div').eq($(this).index()).offset().top})
})
//-----------------------------------media
// $(".media>svg").click(function(){
// 	$("video").removeAttr('controls');
// 	$("video").attr('autoplay',true);
// 	$(this).css('opacity','0.55');
// })
// $(".media>svg").click(function(){
// 	$(this).css('opacity','0.55');
// },function(){
// 	$(this).css('opacity','1');
// })

