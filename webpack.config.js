const path = require('path');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const templates = [
	'index',
	'guia'
];

const templatesHtmlPlugin = templates.map ( (template) => {
	return new HtmlWebpackPlugin({
		filename: __dirname + `/dist/${template}.html`,
		template: __dirname + `/src/html/${template}.html`
	})
});


module.exports = {

	entry: {
		base: [
			'./src/js/base.ts',
			'./src/css/base.scss'
		]
	},

	output: {
		filename: 'js/base.js',
		path: path.resolve(__dirname, './dist')
	},

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: false,
		// hot: true,
		port: 8888
	},

	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					MiniCssExtractPlugin.loader,
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS, using Node Sass by default
				]
			},

			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: {
					loader: "url-loader",
					options: {
						limit: 20000,
						name: '[hash].[ext]',
						outputPath: 'css/assets/',
						publicPath: '/css/assets'
					}
				}
			},

			{
				test: /\.html$/,
				loader: 'html-loader?interpolate'
			},

			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},

			{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'css/assets/',
						publicPath: '/css/assets'
					}
				}
			}
		]
	},

	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true // set to true if you want JS source maps
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			chunkFilename: "[id].css"
		})
	].concat(templatesHtmlPlugin),

	resolve: {
		extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	}
}