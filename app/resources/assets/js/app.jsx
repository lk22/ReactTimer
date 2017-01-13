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
var Countdown = require('Countdown');
var Timer = require('Timer');

// render application
ReactDOM.render(
  	<Router history={HashHistory}>
   		<Route path="/" component={Main}>
			<Route path="/countdown" component={Countdown}></Route>
			<IndexRoute component={Timer}/>
  		</Route>
  	</Router>,
  	document.getElementById('app')
);