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
var n=0;
var ime;
function move(){
	ime=setInterval(function(){
		n++;
		if(n==5) n=0;
		$("main>ul").animate({"left":-1920*n+"px"});
		$("main>ol>li").eq(n).css("background","#3568df");
		$("main>ol>li").eq(n).siblings().css("background","white");
	},3000)
}
move();

$("main>ol>li").eq(0).css("background","#3568df");
$("main>ol>li").click(function(){
	$(this).css("background","#3568df");
	$(this).siblings().css("background","white");
	var index=$(this).index();
	n=index;
	$("main>ul").css("left",-1920*n+"px");
})

$("main>ul>li").hover(function(){
	clearInterval(ime);
},function(){
	move();
})

























