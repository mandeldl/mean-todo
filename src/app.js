'use strict';

var express = require('express');
var router = require('./api/index');
var app = express();

app.use(express.static('public'));

app.use('/api', router);

app.listen('3000', function(){
	console.log('app is listening on port 3000');
})