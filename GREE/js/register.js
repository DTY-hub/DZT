$("main>p>button").click(function(){
	console.log($(this).index());
	$(this).css({"color":'#2daae4','borderTop':'2px solid #2daae4'}).siblings().css({"color":'#747474','border':'none'})
	$("main>div").eq($(this).index()).css("display","block").siblings('div').css('display',"none");
})

//-------------------手机注册
$('.btn').click(function(){
	return false;
})

console.log(document.user)
$('form').eq(0).submit(function(e){
	// e.preventDefault();
	// console.log('‘fasdfauhasudfifdsfg');
	var flag=true;
	var ph=/^((13|14|15|17|18))[0-9]{9}$/;
	var pw=/^[a-zA-Z]\w{5,17}$/;
	var code=/^[a-zA-Z]{2}[0-9]{2}$/;

	if (($('.ph').val().match(ph))&&($('.pw').val().match(pw))&&
		($('.code').val().match(code))&&($('.paw').val()==$('.pw').val())&&
		$('input.cbo').prop('checked')) {
		flag=true;
	}else{
		alert("请输入正确格式的手机号、用户名、邮箱");
		flag=false;
	}
	return flag;
})
//手机
$('.ph').focus(function(){
	console.log($(".ph").val());
	$(".ph").val("");
})
//密码
$('.pw').focus(function(){
	console.log($(".pw").val());
	$(".pw").val("");
})
//确认密码
$('.paw').focus(function(){
	console.log($(".paw").val());
	$(".paw").val("");
})
//手机验证码
$('.code').focus(function(){
	console.log($(".code").val());
	$(".code").val("");
})