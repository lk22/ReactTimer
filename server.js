var express = require('express');

// Create our app
var app = express();

// prepare the server locally and for services like HEROKU
const PORT = process.env.PORT || 3000;

// prepare for using express server in third party services
app.use(function(req, res, next)
{
	if(req.headers['x-forwarded-proto'] === 'https')
	{
		res.redirect('http://' + req.hostname + req.url);
	}
	else
	{
		next();
	}
});

// prepare server locally
app.use(express.static('public'));

// listen on given port
app.listen(PORT, function ()
{
  console.log('Express server is up on port ' + PORT);
});