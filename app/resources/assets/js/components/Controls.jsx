var React = require('react');

var Controls = React.createClass({
	propTypes: {
		countdownStatus: React.PropTypes.string.isRequired,
		onStatusChangeTo: React.PropTypes.func.isRequired
	},

	onStatusChangeTo: function(newStatus) {
		return () => {
			this.props.onStatusChangeTo(newStatus);
		}
	},

	render: function() {
		var {countdownStatus} = this.props;
		var renderStartStopButton = () => {
			if(countdownStatus === 'started') {
				return <button className="button secondary" onClick={this.onStatusChangeTo('paused')}>Pause</button>;
			} else {
				return <button className="button primary" onClick={this.onStatusChangeTo('started')}>Start</button>;
			}
		};

		return (
			<div className="controls">
				{renderStartStopButton()}
				<button className="button primary alert" onClick={this.onStatusChangeTo('stopped')}>Clear</button>
			</div>
		);
	}
});

module.exports = Controls;