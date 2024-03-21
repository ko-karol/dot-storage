import { NonNullableGeneric } from './index.ts';

interface KeyDefinition {
	get key(): { [key: string]: NonNullableGeneric };
	put(value: string): string;
	save(): string;
	load(): string;
	clear(): string;
}

export default KeyDefinition;
