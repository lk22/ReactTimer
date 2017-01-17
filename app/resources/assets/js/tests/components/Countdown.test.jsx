var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');
var expect = require('expect');

var Countdown = require('Countdown');

describe('Countdown component', () =>
{
	it('should exist', () =>
   {
   		expect(Countdown).toExist();
   });

	describe('Handle countdown method', () =>
	{
		it('should set state to started and countdown', (done) =>
		{
			var countdown = TestUtils.renderIntoDocument(<Countdown />);

			countdown.handleSetCountdown(10);

			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');

			setTimeout(() =>
			{
				expect(countdown.state.count).toBe(9);
				done();
			}, 1001);
		});

		it('should prevent count state to hit negative number while counting', (done) =>
	   {
	   		var countdown = TestUtils.renderIntoDocument(<Countdown/>);

	   		countdown.handleSetCountdown(1);

	   		expect(countdown.state.count).toBe(1);

	   		setTimeout(() =>
	   		{
	   			expect(countdown.state.count).toBe(0);
	   			done();
	   		}, 3001);
	   });
	});
});