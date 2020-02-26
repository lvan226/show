document.addEventListener("DOMContentLoaded", function() {
	const banner = $('.banner');
	const header = $('.header__inner');

	// Custom JS
	// Слайдер галереи
	$('.gallery__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: true,
		lazyLoad: 'ondemand',	
	});

	// Слайдер афиши
	$('.poster-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: true,
		lazyLoad: 'ondemand',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	// Меню гамбургер
	$('.menu-burger').on('click', function () {
		$('.menu__list').addClass('active');
	});
	$('.menu__list-close').on('click', function() {
		$('.menu__list').removeClass('active');
	});

	// Плавный скролл якоря
	$("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = 80;
		$('.menu__list').removeClass('active');
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});

	// Фиксация шапки при скролле
	$(window).scroll(function() {
		if ($(window).scrollTop() > banner.height()) {
			$('body').addClass('fixed-menu');
			let margin = $('.menu').height();
			header.css('margin-top', margin + 'px');
		}else {
			$('body').removeClass('fixed-menu');
			header.css('margin-top', '0px');
		}
	});

	$('.popup-btn').on('click', function (e) {
		e.preventDefault();
		let id = $(this).attr('href');
		console.log(id);
		$('#' + id).addClass('active');
	});
	$('.popup-close').on('click', function () {
		$(this).parents('.popup-window').removeClass('active');
	});

});
