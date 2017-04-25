$(document).ready(function(){
	$('.item2').on('click', function(){
		$('html,body').animate({scrollTop: $('.about').offset().top});
	})

	$('.item3').on('click', function(){
		$('html,body').animate({scrollTop: $('.work').offset().top});
	})
})