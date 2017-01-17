var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('Countdown form component', () =>
{
	it('should exist', () =>
	{
		expect(CountdownForm).toExist();
	});

	it('should call onSetCountdown if valid seconds entered', () =>
	{
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownForm));

		countdownForm.refs.seconds.value = '615';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(615);
	});

	it('should not call onSetCountdown if the input is invalid', () =>
   	{
   		var spy = expect.createSpy();
   		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
   		var $el = $(ReactDOM.findDOMNode(countdownForm));

   		countdownForm.refs.seconds.value = '109B';
   		TestUtils.Simulate.submit($el.find('form')[0]);

   		expect(spy).toNotHaveBeenCalled();
  	});
});