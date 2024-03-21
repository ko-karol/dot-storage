import { StrArray } from './index.ts';

interface NamespaceDefinition<V> {
	get keys(): Map<string, V>;
	get queue(): StrArray;
	create(key: string | StrArray): void;
	save(): void;
	load(): void;
	//queue();
}

export default NamespaceDefinition;
