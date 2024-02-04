import IOptions from "./types/IOptions";

export default class OptionsManager {
	private _options?: IOptions;

	constructor(options: IOptions = {}) {
		this._options = options;
	}

	get options(): IOptions {
		return this._options || {};
	}

	public setOptions(options: IOptions): void {
		this._options = { ...this._options, ...options };
	}
}
