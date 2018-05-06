const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.post('/', function(req, res) {

	console.log(req.body);
	res.send('okay!');
});

const server = app.listen(3000, function() {
	console.log(`Express is running on port ${server.address().port}...`);
});

