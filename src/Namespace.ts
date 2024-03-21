import {
	NamespaceDefinition,
	FuncArray,
	StrArray,
	NonNullableGeneric,
} from '@/types/index.ts';

//TEMPLATE CLASS

//TODO: Proxy namespace creation using key class as a template
export default class Namespace
	implements NamespaceDefinition<NonNullableGeneric>
{
	private _keyMap: Map<string, NonNullableGeneric> = new Map();
	private _namespace: string; //unused
	private _queue: FuncArray = [];

	constructor(namespace: string, keys?: string | StrArray) {
		if (keys) {
			[...keys].map((key) => this._keyMap.set(key, ''));
		}

		this._namespace = namespace;
	}

	get keys() {
		return this._keyMap;
	}

	get queue() {
		return this._queue.map((func) => func.toString());
	}

	public create(key: string, defaultValue: NonNullableGeneric = 'default') {
		this._keyMap.set(key, defaultValue);
	}

	public save() {
		this._keyMap.forEach((key, value) => {
			localStorage.setItem(JSON.stringify(key), JSON.stringify(value));
			return `${key} saved to localStorage`;
		});
	}

	public load() {
		this._keyMap.forEach((key) => {
			localStorage.getItem(JSON.parse(JSON.stringify(key)));
			return `${key} loaded from localStorage`;
		});
	}
}
