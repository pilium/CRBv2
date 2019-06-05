const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	output: {
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: [
							['@babel/preset-env', {
								modules: false,
								targets: {
									node: 'current',
								},
								useBuiltIns: false,
							}],
						],
					},
				},
			},
		],
	},
	devtool: 'eval-source-map',
	resolve: {
		alias: {
			'%modules%': path.resolve(__dirname, 'src/blocks/modules'),
			'%components%': path.resolve(__dirname, 'src/blocks/components'),
		},
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				test: /\.js(\?.*)?$/i,
			}),
		],
	},
};
