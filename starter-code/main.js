
console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');

function createBoard() {
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
		board.appendChild(cardElement);
	}
};

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'queen') {
		this.innerHTML = "<img src='queen.png' alt = 'queen card'/>";
	} else {
		this.innerHTML = "<img src='king.png' alt='king card'/>";
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};

function isMatch(cards) {
	if (cards[0] === cards [1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

createBoard();