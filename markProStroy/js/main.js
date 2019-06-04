$(document).ready(function(){

	$('a').click(function() {
		var sectionTo = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(sectionTo).offset().top
		}, 1400);
	});


	$(document).on("click", '[data-toggle="lightbox"]', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});

	$("#lightgallery").lightGallery({
		download: false,
		autoplay: true,
		pause: 7000
	})
})


