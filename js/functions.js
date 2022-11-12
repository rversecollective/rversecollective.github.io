$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDecimal(min, max) {
	return (Math.random() * (max - min) + min).toFixed(1);
}

function getRandomCoordinates(margin) {
	if (!margin) margin = 0;
	return [randomInteger(margin, $('body').width() - margin), randomInteger(margin, $('body').height() - margin)];
}

async function ease() {
	$('.glow').each(function () {
		var coordinates = getRandomCoordinates(100);
		var opacity = randomInteger(0.3, 1);
		var speed = randomInteger(1000, 10000);
		$(this).animate({ opacity: opacity, left: coordinates[0], top: coordinates[1] }, speed);
	});
	setTimeout(function () {
		ease();
	}, 800);
}

Array.prototype.random = function () {
	return this[Math.floor((Math.random() * this.length))];
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function getRandomSymbol() {
	var symbol = symbols.random();
	return (symbol == $('#symbol').html()) ? getRandomSymbol() : symbol;
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
