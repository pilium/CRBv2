module.exports = {
	presets: [
		require.resolve("@babel/preset-env")
	],
	plugins: ["@babel/plugin-syntax-dynamic-import"]
};