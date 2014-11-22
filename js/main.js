$(function() {

	nav = $('nav');
	$(window).scroll(function(event) {
		if($(this).scrollTop() >= 145) {
			nav.addClass('scrolled');
		} else {
			nav.removeClass('scrolled');
		}
	});
});