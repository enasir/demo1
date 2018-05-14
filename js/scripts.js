$(function(){
	
	var menu = $('.home');

	$('.menu-toggle').on('click', function(){
		menu.slideToggle(500, function(){
			if(menu.css('display') == 'none'){
				menu.removeAttr('style');
			}
		});
	});
	
});
$(function(){
var menu = $('.cont');

	$('.navig').on('click', function(){
		menu.slideToggle(500, function(){
			if(menu.css('display') == 'none'){
				menu.removeAttr('style');
			}
		});
	});
});	