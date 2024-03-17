interface NamespaceManagerDefinition {
	get list(): string[];
	create(namespaces: string | string[]): void;
}

export default NamespaceManagerDefinition;
