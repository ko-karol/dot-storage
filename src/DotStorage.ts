import IDotStorage from "./types/IDotStorage";
import IOptions from "./types/IOptions";

import StorageManager from "./StorageManager";
import OptionsManager from "./OptionsManager";
import ValueManager from "./ValueManager";

export default class DotStorage<Input> implements IDotStorage<Input> {
	private _value: ValueManager<Input>;
	private _storage: StorageManager<Input>;
	private _options: OptionsManager;

	constructor(
		value: Input,
		storageKey: string,
		storage: Storage,
		options?: IOptions
	) {
		this._storage = new StorageManager(storage, storageKey);
		this._options = new OptionsManager(options);
		this._value = new ValueManager(value);
		this.store();
	}

	public set value(value: Input) {
		this._value.setValue(value);
		this.store();
	}

	public set options(options: IOptions) {
		const combinedOptions = { ...this._options, ...options };
		this._options.setOptions(combinedOptions);
		this.store();
	}

	public retrieve = (): Input | null => {
		return this._storage.retrieveData();
	};

	public store = (): void => {
		this._storage.storeData(this._value.value);
	};

	public clear = (): void => {
		this._storage.clearData();
	};
}
