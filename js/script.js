var nav = [
	['home', '#'],
	['who?', '#who'],
	['projects', '#projects'],
	['deep', '#deep'],
];

for (var i = 0; i < nav.length; i++) {
	$('.nav').append('<a href="' + nav[i][1] + '">' + (i + 1) + '_' + nav[i][0] + '</a>');
}

function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCoordinates() {
	return [randomInteger(100, $('body').width() - 100), randomInteger(100, $('body').height() - 100)];
}

async function ease() {
	$('.glow').each(function () {
		//var size = randomInteger(3, 30).toString() + 'px';
		var opacity = '0.' + randomInteger(3, 9).toString();
		$(this).animate({ opacity: opacity, left: getRandomCoordinates()[0], top: getRandomCoordinates()[1] }, randomInteger(3000, 10000));
	});
	setTimeout(function () {
		ease();
	}, 800);
}

$('.glow').each(function () {
	$(this).css({ left: '-100px', top: '-100px'});
});

ease();

$('#glow-arena .glow').hide();

setInterval(function () {
	if ($('#glow-arena').isInViewport() && !$('#keep-scrolling').isInViewport()) {
		$('#glow-arena .glow').fadeIn({ queue: false, duration: 'slow' });
	} else {
		$('#glow-arena .glow').fadeOut({ queue: false, duration: 'slow' });
	}
}, 1000);

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

var speed = 900;
var symbols = ['/', '_', '&', '!', '=', ';', '+', '>', '-', '#', ':', '×', '÷'];

Array.prototype.random = function () {
	return this[Math.floor((Math.random() * this.length))];
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function getRandomSymbol() {
	var symbol = symbols.random();
	var newSymbol = (symbol == $('#symbol').html()) ? getRandomSymbol() : symbol;
	return newSymbol;
}

async function fadeInSymbol() {
	$('#symbol').animate({ opacity: 1 }, 1000, function () {
		setTimeout(function () {
			fadeOutSymbol();
		}, 1000);
	});
}

async function fadeOutSymbol() {
	$('#symbol').animate({ opacity: 0 }, 1000, function () {
		$('#symbol').html(getRandomSymbol());
		fadeInSymbol();
	});
}

setTimeout(function () {
	fadeOutSymbol();
}, 500);

// button hover

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
