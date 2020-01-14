//-----------------------放大显示
$('.img-box>.smallimg').hover(function(){
	$('.img-box>.bigimg').css('display','block');
	$('.img-box>.smallimg>.mask').toggle();
},function(){
	$('.img-box>.bigimg').css('display','none');
	$('.img-box>.smallimg>.mask').toggle();
})
//--------------------遮罩出现
// if (pageY-$('.img-box>.smallimg').offset().top>=100) {
// 	$('.img-box>.smallimg>.mask').css({'top':'0px'});
// }

$(".img-box>.smallimg").mousemove(function(e){
	var x=e.pageX-$(this).offset().left;
	var y=e.pageY-$(this).offset().top;
	// var y=$(this).offset().top;
	if (y<=100) {
		y=100;
	}
	if (y>=300) {
	 	y=300;
	}
	if(x<=100){
		x=100;
	}
	if(x>=300){
		x=300;
	}
	$('.img-box>.smallimg>.mask').css({'left':x-100+'px','top':y-100+'px'});
	// console.log('X：'+x);
	// console.log('Y：'+y);
	// if ($('.img-box>.smallimg>.mask')) {}
	$('.img-box>.bigimg>img').css({'left':-2*(x-100)+'px','top':-2*(y-100)+'px'});
})
//----------------加减-------------
$(".img-box>.des>ul p>input").val('1');
// parseInt($(".img-box>.des>ul p>input").val());
$(".img-box>.des>ul p>.cut").click(function(){
	console.log($(".img-box>.des>ul p>input").val());
	var i=$(".img-box>.des>ul p>input").val();
	parseInt(i);
	i--;
	if (i<=1) {
		i=1;
		alert('亲，这边建议采购量不能少于1！！！');
	}
	$(".img-box>.des>ul p>input").val(i);
})
$(".img-box>.des>ul p>.plus").click(function(){
	console.log($(".img-box>.des>ul p>input").val());
	i=$(".img-box>.des>ul p>input").val();
	i++;
	if (i>=999) {
		i=999;
		alert('采购量不能大于库存量！！！');
	}
	$(".img-box>.des>ul p>input").val(i);
})
//----------------小图片-------------
var n=0;
$(".main-bottom>img:nth-of-type(1)").click(function(){
	n++;
	if (n>=2) return false;
	$(".main-bottom>ol").css("left",-88*n+"px");
	// console.log(n);
})
$(".main-bottom>img:nth-of-type(2)").click(function(){
	n--;
	if (n<=-1) return false;
	$(".main-bottom>ol").css("left",-88*n+"px");
	// console.log(n+"gfsdgf");
})
//-------------加边框
$(".main-bottom>ol>li").hover(function(){
	$(this).css("borderColor","#cc0000").siblings().css("borderColor","#fff");
	console.log($(this).children('img').attr('src'));
	var src=$(this).children('img').attr('src');
	$(".smallimg>img").attr('src',src);
	$(".bigimg>img").attr('src',src);
})
