var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
	config.set({
		browsers: ['Chrome'],
		run: true,
		frameworks: ['mocha'],
		files: ['app/resources/assets/js/tests/**/*.test.jsx'],
		preprocessors: {
			'app/resources/assets/js/tests/**/*.test.jsx': ['webpack', 'sourcemap']
		},
		reporters: ['mocha'],
		client: {
			mocha: {
				timeout: '5000'
			}
		},
		webpack: webpackConfig,
		webpackServer:{
			noInfo: true
		}
	});
}