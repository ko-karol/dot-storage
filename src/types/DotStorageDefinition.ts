import { NamespaceManagerDefinition, StrArray } from './index.ts';

export interface DotStorageDefinition {
	get namespaces(): NamespaceManagerDefinition;
	get queue(): StrArray;
	send(): void;
}

export default DotStorageDefinition;
