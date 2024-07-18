// benefits-cards-slider
$('.benefits-cards-slider').slick({
	dots: false,
	arrows: true,
	infinite: true,
	speed: 500,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

jQuery(".modal-form-radio__label input").change(function () {
	jQuery(".modal-form-radio__label").removeClass('checked');
	jQuery(this).closest('.modal-form-radio__label').addClass('checked');
});