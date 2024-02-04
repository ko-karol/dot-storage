import IOptions from "./IOptions";

export default interface IDotStorage<Input> {
	set value(value: Input);
	set options(options: IOptions);
	retrieve(): Input | null;
	store(): void;
	clear(): void;
}
