export default class DotStorage<T> {
	private storage: Storage;
	private storageKey: string;
	private value: T;

	constructor(
		storage: Storage,
		{ storageKey, value }: { storageKey: string; value: T }
	) {
		this.setStorageKey(storageKey!);
		this.setStorage(storage!);
		this.setValue(value!);
	}

	retrieveValue(): T | null {
		try {
			const { storageKey, storage } = this;
			const item = storage.getItem(storageKey);
			if (!item) {
				throw new Error("Couldn't retrieve value from key:" + storageKey);
			}

			return JSON.parse(item);
		} catch (error) {
			return null;
		}
	}

	//remove value should completely remove the variable too
	removeValue(): void {
		this.storage.removeItem(this.storageKey);
	}

	storeValue(): void {
		this.storage.setItem(this.storageKey, JSON.stringify(this.value));
	}

	private setStorage(storage: Storage): void {
		if (storage === undefined || storage === null) {
			throw new Error("Storage definition is required");
		}

		this.storage = storage;
	}

	private setStorageKey(storageKey: string): void {
		if (storageKey === undefined || storageKey === null) {
			throw new Error("StorageKey cannot be null or undefined");
		}

		this.storageKey = storageKey;
	}
	private setValue(value: T): void {
		if (value === undefined || value === null) {
			throw new Error("Value cannot be null or undefined");
		}

		this.value = value;
	}
}
