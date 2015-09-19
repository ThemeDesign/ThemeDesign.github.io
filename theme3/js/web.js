function openmenu(){
	$("#menuleft").css("width","100%");
	$("#menuonlyopen").css("display","block");
	$("#menuleft>h3").css("display","block");
	$("#menualways").css("display","none");
}

function closemenu(){
	$("#menuleft").css("width","0%");
	$("#menuonlyopen").css("display","none");
	$("#menuleft>h3").css("display","none");
	$("#menualways").css("display","block");
}
