import IDotStorage, { Options } from "./types/types";
import retrieve from "./retrieve";

export default class DotStorage<T> implements IDotStorage<T> {
	private value: T;
	private storageKey: string;
	private storage: Storage;
	private options: Options;

	constructor(
		value: T,
		storageKey: string,
		storage: Storage,
		options?: Options
	) {
		this.setValue(value);
		this.setStorageKey(storageKey);
		this.setStorageType(storage);
		this.setOptions(options);
	}

	set newValue(value: T) {
		this.setValue(value);
		this.store();
	}

	set newOptions(options: Options) {
		const combinedOptions = { ...this.options, ...options };
		this.setOptions(combinedOptions);
		this.store();
	}

	retrieve(): T | null {
		return retrieve(this.storage, this.storageKey);
	}

	store(): void {
		this.storage.setItem(this.storageKey, JSON.stringify(this.value));
	}

	clear(): void {
		this.storage.removeItem(this.storageKey);
	}

	private setValue(value: T): void {
		if (value) {
			this.value = value;
		} else throw new Error("Value cannot be null or undefined");
	}

	private setStorageKey(storageKey: string): void {
		if (storageKey) {
			this.storageKey = storageKey;
		} else throw new Error("Storage key cannot be null or undefined");
	}

	private setStorageType(storage: Storage): void {
		if (storage) {
			this.storage = storage;
		} else throw new Error("Storage cannot be null or undefined");
	}

	private setOptions(options: Options = {}): void {
		this.options = options;
	}
}
