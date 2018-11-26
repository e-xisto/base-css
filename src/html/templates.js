const HtmlWebpackPlugin = require("html-webpack-plugin");

const templates = [
	'index',
	'colores',
	'tipografias',
	'contenidos',
	'iconos',
	'grid',
	'botones',
	'formularios',
	'modal',
	'dropdown',
	'tabs',
	'offcanvas',
	'embed',
	'flex',
	'utilidades',
	'guia'
];

const templatesHtmlPlugin = templates.map ( (template) => {
	return new HtmlWebpackPlugin({
		customData: { title: 'BASE CSS', lista: [ "guia.html", "sandbox.html", "..." ] },
		filename: __dirname + `/../../dist/${template}.html`,
		template: __dirname + `/views/${template}.njk`
	})
});

module.exports = templatesHtmlPlugin;
