class Player {
	constructor (name) {
		this._name = name;
		this.hand = [];
		this._handValue = 0;
		this._moneys = 100;
	}

	pickCard (n, cardPackage, hidden = false) {
		for (let i = 0; i < n; i++) {
			let card = cardPackage.content.shift();
			if (hidden) {
				card.toggleHidden();
			}
			this.calcHandValue();
			if (card.name === 'As' && this._handValue > 10) {
				card.value = 1;
			}
			this.hand.push(card);
			this.calcHandValue();
		}
	}

	calcHandValue () {
		this._handValue = 0;
		for (let i = 0; i < this.hand.length; i++) {
			this._handValue += this.hand[i]._value;
		}
	}

	bet (n) {
		this._moneys -= n;
		return n;
	}

	displayCards (container) {
		let cardsNode = '';
		this.hand.forEach(card => {
			if (card.isHidden) {
				cardsNode += `
				<div class="card">
					<img src="./assets/images/cards/back.png">
				</div>`;
			} else {
				cardsNode += `
				<div class="card">
					<img src="./assets/images/cards/${card.name}_${card.sign}.png">
				</div>`;
			}
		});
		container.innerHTML = cardsNode;
	}

	displayScore (containerId) {
		document.getElementById(containerId).textContent = 'Score: ' + this._handValue;
	}

	showAllCards () {
		this.hand.forEach(card => {
			if (card.isHidden) {
				card.toggleHidden();
			}
		})
	}
	
	get handValue () {
		return this._handValue;
	}

	set handValue (n) {
		this._handValue = n;
	}

	get moneys () {
		return this._moneys;
	}

	set moneys (n) {
		this._moneys = n;
	}

}