import FuncArray from '@/types/FuncArray.ts';

export interface DotStorageDefinition {
	namespaces: string[];
	send(queue?: FuncArray): void;
}

export default DotStorageDefinition;
