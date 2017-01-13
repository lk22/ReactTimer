var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
	render: function() {
		return (
			<div id="timer">
				<h3 className="text-center">Timer</h3>
				<Clock totalSeconds={0}/>
			</div>
		);
	}
});

module.exports = Timer;