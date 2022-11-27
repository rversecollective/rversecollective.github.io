Array.prototype.random = function () {
	return this[Math.floor((Math.random() * this.length))];
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

var speed = 900;
var symbols = ['/', '_', '&', '!', '=', ';', '+', '>', '-', '#', ':', '×', '÷'];

setTimeout(function () {
	fadeOutSymbol();
}, 500);

$('#above-button').on('click', function() {
	$('html, body').animate({ scrollTop: 0 } );
});