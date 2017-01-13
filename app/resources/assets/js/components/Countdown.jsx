var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
	// render the component to DOM
	render: function() {
		return (
			<div id="countdown">
				<h4 className="text-center">Countdown</h4>
				<Clock totalSeconds={129} />
			</div>
		);
	}
});

module.exports = Countdown;