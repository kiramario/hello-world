var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        bundle: './index.js'
    },
    output: {
        path: __dirname + '/build/',
        filename: '[name].js',
		publicPath: "./"
    },
	module: {
		loaders: [
			{
				test: /\.js$/,			
				loader:'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("css-loader","style-loader")
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192&name=distImg/[name].[ext]'
			}
		]
	},
	plugins:[
		new ExtractTextPlugin('prefixer_main.css', {
		   disable: false,
		   allowChunks: true
		})
	]
}