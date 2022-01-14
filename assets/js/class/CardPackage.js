class CardPackage {
	constructor (nbOfClogs = 1) {
		this._content = [];
		for (let k = 0; k < nbOfClogs; k++) {
			for (let i = 0; i < 4; i++) {
				let sign = '';
				switch (i) {
					case 0:
						sign = 'pique';
						break;
					case 1:
						sign = 'trefle';
						break;
					case 2:
						sign = 'coeur';
						break;
					case 3:
						sign = 'carreau';
						break;
					default:
						break;
				}
				for (let j = 0; j < 13; j++) {
					let name = '';
					let value = '';
					switch (j) {
						case 0:
							name = 'As';
							value = 11;
							break;
						case 10:
							name = 'Valet';
							value = 10
							break;
						case 11:
							name = 'Dame';
							value = 10
							break;
						case 12:
							name = 'Roi';
							value = 10
							break;
						default:
							name = j+1;
							value = j+1;
							break;
					}
					this._content.push(new Card(name, sign, value));
				}
			}
		}
		console.log('Toutes les cartes sont remises dans le paquet.');
	}

	shuffle () {
		this._content.sort(() => Math.random() - 0.5);
		console.log('Le paquet est mélanger.');
	}

	throwCard (n) {
		for (let i = 0; i < n; i++) {
			this._content.shift();
		}
		console.log(`${n} cartes ont été brulées.`)
	}

	get content () {
		return this._content;
	}
}