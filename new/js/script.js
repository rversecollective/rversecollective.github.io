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

$('a').attr('target', function() {
	if (this.host == location.host) return;
	else return '_blank';
});

$('#hamburger').on('click', function () {
	$('#nav-links-expand').show();
});

$('#hamburgereee').on('mouseout', function () {
	$('#nav-links-expand').hide();
});
$('body').on('click', function (e) {
	if (e.target.id == 'hamburger') return;
	$('#nav-links-expand').hide();
});