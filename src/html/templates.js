const HtmlWebpackPlugin = require("html-webpack-plugin");

const templates = [
	'index',
	'guia'
];

const templatesHtmlPlugin = templates.map ( (template) => {
	return new HtmlWebpackPlugin({
		customData: { title: 'hello world!!', lista: [ "uno", "dos", "tres" ] },
		filename: __dirname + `/../../dist/${template}.html`,
		template: __dirname + `/views/${template}.njk`
	})
});

module.exports = templatesHtmlPlugin;
