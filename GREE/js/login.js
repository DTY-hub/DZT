//-----------------------------用户名
$('.user').focus(function(){
	console.log($('.user').val());
	$('.user').css("borderColor","#e8e8e8");
	$('.user').val("");
})
//用户名须6-18个字符，可使用字母、数字、下划线，需以字母开头！
document.forms.onsubmit=function(){
	var flag=true;
	var ph=/^((13|14|15|17|18))[0-9]{9}$/;
	var uname=/^[a-zA-Z]\w{5,17}$/;
	var mail=/[\w-]+(\.[\w-]+)*@([\w-]+\.)+\w{2,14}/;
	if (($('.user').val().match(mail))||($('.user').val().match(ph))||($('.user').val().match(uname))) {
		flag=true;
		$('#tips').html("请输入登录密码");
	}else{
		$('#tip').html("格式错误");
		alert("请输入正确格式的手机号、用户名、邮箱");
		$('.user').css("borderColor","red");
		flag=false;
	}
	return flag;
}
//--------------------------------------------密码
$('.pw').focus(function(){
	console.log($(".pw").val());
	$(".pw").val("")
})
document.forms.onsubmit=function(){
	var fla=true;
	var pw="Nba18476312705";
	if(($('.pw').val()==pw)){
		fla=true;
	}else{
		$('#tips').html("密码输入错误！");
		var i=5;
		i--;
		$('#tip').html("还有"+i+"次机会！");
		fla=false;
	}
	return fla;
}