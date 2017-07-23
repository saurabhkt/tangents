$(function() {
	$('button.enter-site').on('click', function() {
		$('#enterSite').hide();
		$('#mainSite').show();
		$('#home .bandcamp .container').html($('#bandcampEmbedTemplate').html())
	});

	$('.sm-menu').on('click', function() {
		$('nav .sm-nav-menu').show();
	});

	$('.sm-menu-close').on('click', function() {
		$('nav .sm-nav-menu').hide();
	});

	$('.sm-nav-menu a').on('click', function() {
		$('nav .sm-nav-menu').hide();
	});

	function sizeHandler() {
		if ($(window).width()  > 991 ) {
			$('nav .sm-nav-menu').hide();
			$('#about .member').removeClass('hide');
			// $.scrollify({
			// 	section : ".section"
			// });
		}
		else {
			$('#about .member').addClass('hide');
			$('#about .member[name="1"]').removeClass('hide');
			// $.scrollify.destroy()
		}
	}

	sizeHandler();

	$(window).resize(function(){
		sizeHandler();
	});

	var curr = 1;

	$('.change-img').on('click', function() {
		if ($(this).hasClass('next'))
			curr = (curr%3) + 1;
		else if ($(this).hasClass('prev')) {
			if (--curr == 0)
				curr = 3;
		}
		$('#about .member').addClass('hide');
		$('#about .member[name="'+curr+'"]').removeClass('hide');;
	});

});

function scrollToSection(target) {
	$('html,body').animate({
		scrollTop: $(target).offset().top - ($('#navbar-main').offset().top)
	}, 1000);
}

$('#navbar-main a').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				scrollToSection(target);
				return false;
			} 
	}
});