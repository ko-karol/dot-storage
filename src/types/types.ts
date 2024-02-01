export default interface IDotStorage<T> {
	set newValue(value: T);
	retrieve(): T | null;
	clear(): void;
	store(): void;
}

export type Options = {
	namespace?: string;
	expiration?: number;
	size?: number;
};
