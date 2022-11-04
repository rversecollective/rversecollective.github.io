var symbols = ['/', '_', '&', '!', '=', ';', '+', '>'];

function randomInteger(min, max) {
	 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSymbol() {
	 var oldSymbol = document.querySelector('#symbol').innerHTML;
	 var symbol = symbols[randomInteger(0, symbols.length - 1)];
	 if (oldSymbol == symbol) {
			 return getRandomSymbol();
	 }
	 return symbol;
}

setInterval(function () {
	 document.querySelector('#symbol').innerHTML = getRandomSymbol();
}, 2000);
