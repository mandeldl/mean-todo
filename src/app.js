'use strict';

var express = require('express');

var app = express();

app.use(express.static('public'));

var router = express.Router();

router.get('/todos', function(req, res) {
	res.json({'todos':'These are the todos'});
});

app.use('/api', router);

app.listen('3000', function(){
	console.log('app is listening on port 3000');
})