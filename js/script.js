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

function fadeOutSymbol() {
	$('#symbol').animate({ opacity: 0 }, speed, function () {
		$('#symbol').html(getRandomSymbol());
		fadeInSymbol();
	});
}

function fadeInSymbol() {
	$('#symbol').animate({ opacity: 1 }, speed, function () {
		setTimeout(function () {
			fadeOutSymbol();
		}, 1000);
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
