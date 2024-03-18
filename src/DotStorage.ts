import {
	DotStorageDefinition,
	NamespaceManagerDefinition,
	FuncArray,
	StrArray,
} from './types/index.ts';

import NamespaceManager from './NamespaceManager.ts';

export default class DotStorage implements DotStorageDefinition {
	private _namespaces: NamespaceManagerDefinition;
	private _queue: FuncArray;

	constructor(namespaces?: StrArray) {
		this._namespaces = new NamespaceManager(namespaces);
		this._queue = [];
	}
	get namespaces() {
		return Object(this._namespaces);
	}

	get queue() {
		return this._queue.map((func) => func.toString());
	}

	public send = () => {
		this._queue.map((func) => func());
		this._queue = [];
	};
}
