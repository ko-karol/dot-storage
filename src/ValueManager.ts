export default class ValueManager<Input> {
	private _value: Input;

	constructor(value: Input) {
		this.setValue(value);
	}

	public get value(): Input {
		return this._value;
	}

	public setValue(value: Input) {
		try {
			if (value === null || value === undefined) {
				throw new Error("Value cannot be null or undefined");
			}

			this._value = value;
		} catch (error) {
			console.error(error);
		}
	}
}
