/* eslint-env node */

var path = require('path');
var webpack = require('webpack');
var sourceDir = path.join(__dirname, '/src');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(sourceDir, 'index.js'),

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.build.js'
	},

	module: {
		loaders: [
			{
				test: /\.(jsx|js)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ 'es2015', 'react', 'stage-1' ]
				}
			},
			{
				loader: 'file',
				test: /\.(png|mp3|wav)$/
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: [ 'style', 'css', 'sass' ]
			}
		],

		preLoaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Otaclock',
			template: 'src/index.html'
		}),
		new webpack.ProvidePlugin({
			React: 'react',
			ReactDOM: 'react-dom'
		})
	],

	resolve: {
		root: [
			path.join(sourceDir, 'images'),
			sourceDir
		]
	}
};
