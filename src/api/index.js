'use strict';

//API Module
var express = require('express');
var todos = require('../../mock/todos.json'); //mock data

var router = express.Router();

router.get('/todos', function(req, res) {
	res.json({'todos':todos});
});

module.exports = router;