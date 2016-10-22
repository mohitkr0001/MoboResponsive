$(document).ready(function(){
	$(".press").click(function(){
		console.log("hello");
		$(".list").toggleClass("dis");
	});
	 hei=$('.ima').height();
	 $(window).scroll(function(){
	 	var sc=$(this).scrollTop();
	 	console.log(sc);
	 	if(sc<=hei){
	 		$('.ima h4').css({'transform' : 'translate(0px , -'+ sc+'%)'});
	 		$('.ima p').css({'transform' : 'translate(-50%, -'+ sc/1.5+'%)'});
	 		$('.ima img').css({'transform' : 'translate(0px, '+ sc/1.5+'%)'});
	 	}
	 	if(sc>$('.status').offset().top - ($(window).height()/3)){
	 		$('.status span').each(function(i){
	 			setTimeout(function(){
	 				$('.status span').eq(i).addClass('one1');
	 			},500*i );
	 		});
	 	}
	 	else{
	 		$('.status span').removeClass('one1');
	 	}
	 });
});