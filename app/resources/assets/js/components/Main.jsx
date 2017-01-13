// dependencies
var React = require('react');
var Nav = require('Nav');

// component (stateless)
const Main = (props) => {
	return (
	    <div>
	    	<Nav/>
	    	<div>
	    		{props.children}
	    	</div>
	    </div>
	);
};

module.exports = Main;