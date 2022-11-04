var symbols = ['/', '_', '&', '!', '=', ';', '+', '>'];

function randomInteger(min, max) {
	 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSymbol() {
	 var oldSymbol = $('.mid-point-symbol').html();
	 var symbol = symbols[randomInteger(0, symbols.length - 1)];
	 if (oldSymbol == symbol) {
			 return getRandomSymbol();
	 }
	 return symbol;
}

setInterval(function () {
	 $('.mid-point-symbol').html(getRandomSymbol());
}, 2000);
