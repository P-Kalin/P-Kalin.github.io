$(document).ready(function(){


	// sticky
 
	// Create a clone of the menu, right next to original.
	$('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

	scrollIntervalID = setInterval(stickIt, 10);


	function stickIt() {

		var orgElementPos = $('.original').offset();
		orgElementTop = orgElementPos.top;               

		if ($(window).scrollTop() >= (orgElementTop)) {
	    // scrolled past the original position; now only show the cloned, sticky element.

	    // Cloned element should always have same left position and width as original element.     
	    orgElement = $('.original');
	    coordsOrgElement = orgElement.offset();
	    leftOrgElement = coordsOrgElement.left;  
	    widthOrgElement = orgElement.css('width');
	    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
	    $('.original').css('visibility','hidden');
	} else {
	    // not scrolled past the menu; only show the original menu.
	    $('.cloned').hide();
	    $('.original').css('visibility','visible');
	}
}

	// scroll
	$('a').click(function() {
		var sectionTo = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(sectionTo).offset().top
		}, 1200);
	});


	// skills

	$(function() {

		$(".progress").each(function() {

			var value = $(this).attr('data-value');
			var left = $(this).find('.progress-left .progress-bar');
			var right = $(this).find('.progress-right .progress-bar');

			if (value > 0) {
				if (value <= 50) {
					right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
				} else {
					right.css('transform', 'rotate(180deg)')
					left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
				}
			}

		})

		function percentageToDegrees(percentage) {
			return percentage / 100 * 360
		}
	});

	// E-mail validation

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};

})
