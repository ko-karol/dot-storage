/**
 * @jest-environment jsdom
 */

import DotStorage from "../src/DotStorage";

describe("DotStorage", () => {
	let storage = window.localStorage;
	let storageKey = "testKey";
	let value = { test: "value" };
	let dotStorage: DotStorage<{ test: string }>;

	beforeEach(() => {
		storage.clear();
		if (storage === window.localStorage) {
			storage = window.sessionStorage;
		} else storage = window.localStorage;

		dotStorage = new DotStorage(storage, { storageKey, value });
	});

	it("should retrieve the same value from storage", () => {
		dotStorage.storeValue();
		const retrievedValue = dotStorage.retrieveValue();
		expect(retrievedValue).toEqual(value);
	});

	it("should remove the value from storage", () => {
		dotStorage.storeValue();
		dotStorage.removeValue();
		const retrievedValue = dotStorage.retrieveValue();
		expect(retrievedValue).toBeNull();
	});

	it("should throw an error if storage is not defined", () => {
		expect(() => {
			dotStorage = new DotStorage(undefined, { storageKey, value });
		}).toThrow(Error);
	});

	it("should throw an error if storageKey is not defined", () => {
		expect(() => {
			dotStorage = new DotStorage(storage, { storageKey: undefined, value });
		}).toThrow(Error);
	});

	it("should throw an error if value is not defined", () => {
		expect(() => {
			dotStorage = new DotStorage(storage, { storageKey, value: undefined });
		}).toThrow(Error);
	});
});
