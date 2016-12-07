'use strict';

//API Module
var express = require('express');

var router = express.Router();

router.get('/todos', function(req, res) {
	res.json({'todos':['These are the todos', 'part 2']});
});

module.exports = router;