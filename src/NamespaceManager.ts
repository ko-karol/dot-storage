import {
	NamespaceManagerDefinition,
	FuncArray,
	StrArray,
	StrSet,
} from '@/types/index.ts';

//TODO: Proxy namespace creation using namespace class as a template
export default class Namespaces implements NamespaceManagerDefinition {
	private _namespaces: StrSet;
	private _queue: FuncArray = [];

	constructor(namespaces?: StrArray) {
		this._namespaces = new Set(namespaces);
	}

	public get list() {
		return Array.from(this._namespaces);
	}

	public create = (namespaces: string | string[]): void => {
		if (Array.isArray(namespaces)) {
			namespaces.forEach((ns) => {
				this._namespaces.add(ns);
			});
		} else {
			this._namespaces.add(namespaces);
		}
	};
}
