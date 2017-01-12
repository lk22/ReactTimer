// dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, HashHistory} = require('react-router');

// foundation CSS
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// application stylesheet
require('style!css!applicationStyles');

// page components
var Main = require('Main');

// render application
ReactDOM.render(
  	<Router history={HashHistory}>
   		<Route path="/" component={Main}>

  		</Route>
  	</Router>,
  	document.getElementById('app')
);