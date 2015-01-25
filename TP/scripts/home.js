$(".navbar-nav").on('click','a',function(){
$(".home,.events,.team,.testimonials,.contact").addClass('hide');
if($(this).attr('id')=="home"){
	$(".home").removeClass('hide');
}
else if($(this).attr('id')=="events"){
	$(".events").removeClass('hide');
}
else if($(this).attr('id')=="team"){
	$(".team").removeClass('hide');
}
else if($(this).attr('id')=="testimonials"){
	$(".testimonials").removeClass('hide');
}else if($(this).attr('id')=="contact"){
	$(".contact").removeClass('hide');
}
});