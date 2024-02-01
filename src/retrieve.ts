export default function retrieve<T>(
	storage: Storage,
	storageKey: string
): T | null {
	const errorMessage = `Couldn't retrieve value from key: ${storageKey}`;

	try {
		const item = storage.getItem(storageKey);
		if (!item) throw new Error(errorMessage);

		return JSON.parse(item);
	} catch (error) {
		console.error(error);
		return error;
	}
}
