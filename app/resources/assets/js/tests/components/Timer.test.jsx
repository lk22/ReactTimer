var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = require('expect');

var Timer = require('Timer');

describe('Timer component', () =>
{
	it('should exist', () =>
   {
   		expect(Timer).toExist();
   });

	it('should start timer on started status', () =>
	{
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.handleStatusChange('started');
		expect(timer.state.count).toBe(0);

		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('started');
			expect(timer.state.count).toBe(1);
		}, 1001);
	});

	it('should pause on paused status', () =>
	{
		var timer = TestUtils.renderIntoDocument(<Timer />);

		timer.setState({count: 10});

		timer.handleStatusChange('paused');
		expect(timer.state.count).toBe(10);

		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('paused');
			expect(timer.state.count).toBe(10);
		}, 3001);
	});

	it('should clear timer on stopped status', () =>
	{
		var timer = TestUtils.renderIntoDocument(<Timer/>);

		timer.setState({count: 10});
		timer.handleStatusChange('started');
		timer.handleStatusChange('stopped');

		setTimeout(() => {
			expect(timer.state.timerStatus).toBe('stopped');
			expect(timer.state.count).toBe(0);
		}, 1001);
	});
});