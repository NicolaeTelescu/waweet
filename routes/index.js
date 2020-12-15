const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const path = require('path');
const Item = require('../Database/models/Item');
const Category = require('../Database/models/Category');
const helpers = require('../src/helpers/index');


const addRouter = require('./item/add');
const showRouter = require('./item/show');
const editRouter = require('./item/edit');
const deleteRouter = require('./item/delete');


router.use('/', addRouter);
router.use('/', showRouter);
router.use('/', editRouter);
router.use('/', deleteRouter);



// Homepage
router.get('/', async function(req, res, next) {
  	return res.sendFile('index.html', {root: './public/html'});
});



// Show items page
router.get('/items', async function(req, res, next) {
	return res.sendFile('index.html', {root: './public/html'});
});



// Get all items
router.get('/items/all', async function(req, res, next) {
  
  	let { search, category, page, limit } = req.query;

	if (!page) page = 1;
	if (!limit) limit = 5;
	if (!search) search = '';
	if (!category) category = '';
  
	page = parseInt(page);
	limit = parseInt(limit);
	
	try {
		const filter = {
			title: new RegExp(search, 'i'),
			category: new RegExp(category, 'i'),
			show: true
		};

		const items = await Item.find(filter).limit(limit).skip((page - 1) * limit);
		const count = await Item.countDocuments(filter);

		res.json({
			items,
			totalElements: count
		});
	} catch (err) {
		console.error(err.message);
	}
});



// Get item
router.get('/item/:itemSlug', async function(req, res, next) {
	try {
		const item = await Item.findOne({slug: req.params.itemSlug, show: true});
		
		return (item !== null) ? res.status(200).json(item) : res.status(400).json({});
	} catch (err) {
	  	return res.status(400).json({});
  	}
});



// Get categories
router.get('/categories/all', async function(req, res, next) {
	try {
		const categories = await Category.find();
		return res.status(200).json(categories);
	} catch (err) {
	  	return res.status(400).json({});
  	}
});



// Get message
router.get('/serverMessage', async function(req, res, next) {
	try {
		const message = req.session.success;
		req.session.success = null;
		
		return res.status(200).send(message);
	} catch (err) {
	  	return res.status(400).json({});
  	}
});




module.exports = router;
