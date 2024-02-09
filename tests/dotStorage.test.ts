import DotStorage, { IDotStorage } from "../src/DotStorage";

describe("DotStorage", () => {
	let storage: IDotStorage<number>;
	let mockStorage: Storage;
	const storageKey = "testKey";
	const value = 42;
	const options = { namespace: "value1", expiresAt: Date.now() + 1000 };

	beforeEach(() => {
		mockStorage = {
			setItem: jest.fn(),
			removeItem: jest.fn(),
			getItem: jest.fn().mockReturnValue(JSON.stringify(value)),
		} as any;

		storage = new DotStorage(value, storageKey, mockStorage, options);
	});

	it("should store value in storage", () => {
		storage.value = 43;
		expect(mockStorage.setItem).toHaveBeenCalledWith(
			storageKey,
			JSON.stringify(43)
		);
	});

	it("should combine and set new options", () => {
		const newOptions = { namespace: "value2", expiresAt: Date.now() + 2000 };
		storage.options = newOptions;
		expect(storage["options"]).toEqual({ ...options, ...newOptions });
	});

	it("should clear value from storage", () => {
		storage.clear();
		expect(mockStorage.removeItem).toHaveBeenCalledWith(storageKey);
	});

	it("should retrieve stored value from storage", () => {
		const retrievedValue = storage.retrieve();
		expect(retrievedValue).toEqual(value);
	});
});
