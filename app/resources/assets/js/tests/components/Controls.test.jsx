var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQUery');
var expect = require('expect');

var Controls = require('Controls');

describe('Controls component', () =>
{
	it('should exist', () =>
	{
		expect(Controls).toExist();
	});

	it('should have default property types', () =>
	{
		expect(Controls.propTypes.countdownStatus).toBe(React.PropTypes.string.isRequired);
		expect(Controls.propTypes.onStatusChangeTo).toBe(React.PropTypes.func.isRequired);
	});

	describe('rendering component', () =>
	{
		it('should render pause button if countdown status is equal to started', () =>
	    {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			var pauseButton = $el.find('button:contains(Pause)');

			expect(pauseButton.length).toBe(1);
	    });

	    it('should render start button when paused', () =>
	    {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			var startButton = $el.find('button:contains(Start)');

			expect(startButton.length).toBe(1);
	    });
	});
});