import { KeyDefinition, NonNullableGeneric } from '@/types/index.ts';

//TEMPLATE CLASS

export default class Key implements KeyDefinition {
	private _key: string;
	private _value: NonNullableGeneric = '';

	constructor(key: string, value?: NonNullableGeneric) {
		//TODO: change any to a generic
		this._key = key;
		if (value) {
			this._value = value;
		}
	}

	get key() {
		return {
			[this._key]: this._value,
		};
	}

	public put(value: NonNullableGeneric) {
		this._value = value;
		return `The value of ${this._key} changed to ${value}`;
	}

	public save() {
		localStorage.setItem(this._key, JSON.stringify(this._value));
		return `${this._key} saved to localStorage`;
	}

	public load() {
		const loadedValue = localStorage.getItem(JSON.parse(this._key));
		if (loadedValue && loadedValue !== this._value) {
			this._value = loadedValue;
		}
		return `${this._key} loaded from localStorage`;
	}

	public clear() {
		localStorage.removeItem(this._key);
		return `${this._key} cleared from localStorage`;
	}
}
