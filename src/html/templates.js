const HtmlWebpackPlugin = require("html-webpack-plugin");

const templates = [
	'index',
	'guia'
];

const templatesHtmlPlugin = templates.map ( (template) => {
	return new HtmlWebpackPlugin({
		customData: { title: 'Abre el html que sea!!', lista: [ "guia.html", "sandbox.html", "..." ] },
		filename: __dirname + `/../../dist/${template}.html`,
		template: __dirname + `/views/${template}.njk`
	})
});

module.exports = templatesHtmlPlugin;
