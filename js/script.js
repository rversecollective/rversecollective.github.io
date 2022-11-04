var symbols = ['/', '_', '&', '!', '=', ';', '+', '>'];

function randomInteger(min, max) {
	 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSymbol() {
	 var symbol = symbols[randomInteger(0, symbols.length - 1)];
	 if (symbol == document.getElementById('symbol').innerHTML) return getRandomSymbol();
	 return symbol;
}

setInterval(function () {
	document.getElementById('symbol').innerHTML = getRandomSymbol();
}, 1800);
