// dependencies
var React = require('react');
var Nav = require('Nav');

// component (stateless)
const Main = (props) => {
	return (
	    <div>
	    	<Nav/>
	    	<div className="columns small-centered medium-6 large-4">
	    		{props.children}
	    	</div>
	    </div>
	);
};

module.exports = Main;