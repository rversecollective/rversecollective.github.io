/* Navigation */

var nav = [
	['home', '#'],
	['who?', '#who'],
	['projects', '#projects']
];

for (var i = 0; i < nav.length; i++) {
	var currentPage = (window.location.href.split('#')[1] == undefined) ? '#' : '#' + window.location.href.split('#')[1];

	$('.nav').append('<a href="' + nav[i][1] + '">' + (i + 1) + '_' + nav[i][0] + '</a>');
	$('.nav a[href="' + currentPage + '"]').attr('class', 'active');
}

$('.nav a').on('click', function () {
	$('.nav a').removeAttr('class');
	$('.nav a[href="' + $(this).attr('href') + '"]').attr('class', 'active');
	// selecting every nav element since there's more than one
});

/* glowing orbs */

var amountStars = ($('body').width() / 10).toFixed();

$(document).ready(function() {
	for (var i = 0; i < amountStars; i++) {
		var star = $('<span class="star">');
		star.css({ left: getRandomCoordinates(0)[0], top: randomInteger(0, $(document).height()) });
		$('#glow-arena').append(star);
	}
	$('.glow, .star').hide();
});

ease();

setInterval(function () {
	if ($('#glow-arena').isInViewport() && $('#glow-arena:visible').length && !$('#keep-scrolling').isInViewport()) {
		$('.glow, .star').fadeIn({ queue: false, duration: 'slow' });
	} else {
		$('.glow, .star').fadeOut({ queue: false, duration: 'slow' });
	}
}, 1000);


/* change symbol in header */

var speed = 900;
var symbols = ['/', '_', '&', '!', '=', ';', '+', '>', '-', '#', ':', '×', '÷'];

setTimeout(function () {
	fadeOutSymbol();
}, 500);

/*
$(document).ready(function() {
	$('[random="true"]').each(function () {
		var type = $(this).prop('nodeName');
		if (type == 'SCRIPT') {
			var src = $(this).attr('src') + '?v=' + getRandomID();
			$(this).attr('src', src);
		} else if (type == 'LINK') {
			var href = $(this).attr('href') + '?v=' + getRandomID();
			$(this).attr('href', href);
		}
	});
});*/
