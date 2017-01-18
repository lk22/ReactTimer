var webpack = require('webpack');

module.exports = {
	 entry: [
	    'script!jquery/dist/jquery.min.js',
	    'script!foundation-sites/dist/js/foundation.min.js',
	    './app/resources/assets/js/app.jsx'
	],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			// components
			Main: 'app/resources/assets/js/components/Main.jsx',
			Nav : 'app/resources/assets/js/components/Nav.jsx',
			Countdown: 'app/resources/assets/js/components/Countdown.jsx',
			CountdownForm: 'app/resources/assets/js/components/CountdownForm.jsx',
			Timer: 'app/resources/assets/js/components/Timer.jsx',
			Clock: 'app/resources/assets/js/components/Clock.jsx',
			Controls: 'app/resources/assets/js/components/Controls.jsx',

			// styles
			applicationStyles: 'app/resources/assets/css/styles.css'
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
}