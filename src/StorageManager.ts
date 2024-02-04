export default class StorageManager<Input> {
	private _storage: Storage;
	private _storageKey: string;

	constructor(storage: Storage, storageKey: string) {
		this._storage = storage;
		this._storageKey = storageKey;
	}

	public get storage(): {} {
		return {
			StorageType: this._storage,
			storageKey: this._storageKey,
		};
	}

	public storeData(value: Input): void {
		this._storage.setItem(this._storageKey, JSON.stringify(value));
	}

	public retrieveData(): Input | null {
		try {
			const item = this._storage.getItem(this._storageKey);

			if (!item) {
				throw new Error(`Couldn't get value from key: ${this._storageKey}`);
			}

			return JSON.parse(item);
		} catch (error) {
			console.error("Error retrieving data:", error);
			return null;
		}
	}

	public clearData(): void {
		this._storage.removeItem(this._storageKey);
	}
}
