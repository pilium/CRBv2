const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: {
		main: './src/js/index.js',
		common: './src/js/import/pages/common.js',
		gallery: './src/js/import/pages/gallery.js',
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
		publicPath: '/',
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
							[
								'@babel/preset-env',
								{
									modules: false,
									targets: {
										node: 'current',
									},
									useBuiltIns: false,
								},
							],
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
				cache: true,
				parallel: true,
			}),
		],
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: 'initial',
					name: 'vendor',
					enforce: true,
				},
			},
		},
	},
};
