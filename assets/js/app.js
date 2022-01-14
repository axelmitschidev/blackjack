const player = new Player('player');
const croupier = new Player('croupier');

let deck = new CardPackage(6);

let totalBet = 0;

document.querySelector('.btn-group').style.display = 'none';

document.getElementById('info').textContent = 'BLACKJACK';

document.getElementById('money').textContent = player.moneys + '€';

document.getElementById('btn-new-game').addEventListener('click', e => {

	totalBet = parseInt(player.bet(prompt('Combien veux tu miser ?')));
	document.getElementById('money').textContent = player.moneys + '€';
	

	player.hand = [];
	player.displayCards(document.getElementById('player-container'));
	croupier.hand = [];
	croupier.displayCards(document.getElementById('croupier-container'));
	deck = new CardPackage(6);

	document.getElementById('btn-new-game').style.display = 'none';
	document.querySelector('.btn-group').style.display = 'block';

	deck.shuffle();
	deck.throwCard(5);
	
	croupier.pickCard(1, deck);
	croupier.displayCards(document.getElementById('croupier-container'));
	croupier.displayScore('score-croupier');
	
	player.pickCard(2, deck);
	player.displayCards(document.getElementById('player-container'));
	player.displayScore('score-player');
	
	croupier.pickCard(1, deck, true);
	croupier.displayCards(document.getElementById('croupier-container'));

	document.getElementById('info').textContent = 'Choisissez une action';
	
	if (player.handValue === 21) { // gagne
		document.getElementById('info').textContent = 'Tu as gagné';
		document.getElementById('btn-new-game').style.display = 'block';
		document.querySelector('.btn-group').style.display = 'none';

		player.moneys += totalBet * 1.5;
		document.getElementById('money').textContent = player.moneys + '€';
	}
})

document.getElementById('hit-btn').addEventListener('click', function hit (e) {
	
	player.pickCard(1, deck);
	player.displayCards(document.getElementById('player-container'));
	player.displayScore('score-player');
	
	if (croupier.handValue < 17) {
		croupier.pickCard(1, deck, true);
		croupier.displayCards(document.getElementById('croupier-container'));
	}
	
	if (player.handValue > 21) { // perd
		document.getElementById('info').textContent = 'Tu perds';
		
		croupier.showAllCards();
		croupier.displayCards(document.getElementById('croupier-container'));
		croupier.displayScore('score-croupier');
		
		document.getElementById('btn-new-game').style.display = 'block';
		document.querySelector('.btn-group').style.display = 'none';
	}

	if (player.handValue === 21 && croupier.handValue != 21) { // gagne
		document.getElementById('info').textContent = 'Tu as gagné';

		croupier.showAllCards();
		croupier.displayCards(document.getElementById('croupier-container'));
		croupier.displayScore('score-croupier');

		document.getElementById('btn-new-game').style.display = 'block';
		document.querySelector('.btn-group').style.display = 'none';

		player.moneys += totalBet * 1.5;
		document.getElementById('money').textContent = player.moneys + '€';
	} else if (player.handValue === 21 && croupier.handValue === 21) {
		document.getElementById('info').textContent = 'Egalité';
		
		croupier.showAllCards();
		croupier.displayCards(document.getElementById('croupier-container'));
		croupier.displayScore('score-croupier');
		
		document.getElementById('btn-new-game').style.display = 'block';
		document.querySelector('.btn-group').style.display = 'none';
		
		player.moneys += totalBet;
		document.getElementById('money').textContent = player.moneys + '€';
	}
})

document.getElementById('stand-btn').addEventListener('click', function stand (e) {
	
	if (player.handValue < croupier.handValue && croupier.handValue <= 21) { // perd
		
		document.getElementById('info').textContent = 'Tu perds';
		
		croupier.showAllCards();
		croupier.displayCards(document.getElementById('croupier-container'));
		croupier.displayScore('score-croupier');
		
		document.getElementById('btn-new-game').style.display = 'block';
		document.querySelector('.btn-group').style.display = 'none';
		
	} else if (player.handValue === croupier.handValue) {  // egalité
		
		document.getElementById('info').textContent = 'Egalité';
		
		croupier.showAllCards();
		croupier.displayCards(document.getElementById('croupier-container'));
		croupier.displayScore('score-croupier');
		
		document.getElementById('btn-new-game').style.display = 'block';
		document.querySelector('.btn-group').style.display = 'none';
		
		player.moneys += totalBet;
		document.getElementById('money').textContent = player.moneys + '€';

	} else {  // gagne
		
		document.getElementById('info').textContent = 'Tu gagnes';
		
		croupier.showAllCards();
		croupier.displayCards(document.getElementById('croupier-container'));
		croupier.displayScore('score-croupier');
		
		document.getElementById('btn-new-game').style.display = 'block';
		document.querySelector('.btn-group').style.display = 'none';

		player.moneys += totalBet * 1.5;
		document.getElementById('money').textContent = player.moneys + '€';
	}
})