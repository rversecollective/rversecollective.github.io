//nav

var nav = [
	['home', '#'],
	['who?', '#who'],
	['projects', '#projects']
];

for (var i = 0; i < nav.length; i++) {
	$('.nav').append('<a href="' + nav[i][1] + '">' + (i + 1) + '_' + nav[i][0] + '</a>');
}

// glowing orbs

$('.glow').each(function () {
	$(this).css({ left: '-100px', top: '-100px'});
});

ease();

$('#glow-arena .glow').hide();

setInterval(function () {
	if ($('#glow-arena').isInViewport() && $('#glow-arena:visible').length && !$('#keep-scrolling').isInViewport()) {
		$('#glow-arena .glow').fadeIn({ queue: false, duration: 'slow' });
	} else {
		$('#glow-arena .glow').fadeOut({ queue: false, duration: 'slow' });
	}
}, 2000);

// change symbol in header
var speed = 900;
var symbols = ['/', '_', '&', '!', '=', ';', '+', '>', '-', '#', ':', '×', '÷'];

setTimeout(function () {
	fadeOutSymbol();
}, 500);

// button hover
/*
var originalText = $('a.button').html();
var secondText = originalText;
var alt = '_';

$('a.button').on('mouseover', function () {
    buttonChange = setInterval(function() {
        var index = secondText.indexOf(alt);
        if (index == -1) {
            secondText = secondText.replaceAt(0, alt);
        } else if (index == originalText.length - 1) {
            secondText = originalText;
        } else {
            secondText = originalText.replaceAt(index + 1, alt);
        }
        $('a.button').html(secondText);
    }, 120);
});

$('a.button').on('mouseout', function () {
    clearInterval(buttonChange);
    $('a.button').html(originalText);
    secondText = originalText;
});
*/
