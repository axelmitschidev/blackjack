class Card {
	_name = 0;
	_sign = 0;
	_value = 0;

	constructor (name, sign, value) {
		this._name = name;
		this._sign = sign;
		this._value = value;
		this._isHidden = false;
	}

	get name () {
		return this._name;
	}

	get sign () {
		return this._sign;
	}

	get value () {
		return this._value;
	}

	set value (v) {
		this._value = v;
	}

	get isHidden () {
		return this._isHidden;
	}

	toggleHidden () {
		this._isHidden = !this._isHidden;
	}
}