function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCoordinates() {
	return [randomInteger(100, $('body').width() - 100), randomInteger(100, $('body').height() - 100)];
}

async function ease() {
	$('.glow').each(function () {
		var size = randomInteger(3, 8).toString() + 'px';
		$(this).animate({ opacity: '0.' + randomInteger(0, 9).toString(), width: size, height: size, left: getRandomCoordinates()[0], top: getRandomCoordinates()[1] }, randomInteger(5000, 10000));
	});
	setTimeout(function () {
		ease();
	}, 800);
}

$('.glow').each(function () {
	$(this).css({ width: '5px', height: '5px', left: '0px', top: '0px'});
});

setTimeout(function () {
	ease();
}, 1000);

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
