import typescript from "@rollup/plugin-typescript";

export default [
	{
		input: "src/DotStorage.ts",
		output: {
			name: "DotStorage",
			file: "dist/dot-storage.js",
			format: "umd",
		},
		plugins: [
			typescript({
				tsconfig: "tsconfig.json",
			}),
		],
	},
];
