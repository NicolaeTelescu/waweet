const express = require('express');
const router = express.Router();
const Item = require('../../Database/models/Item');
const Category = require('../../Database/models/Category');


// Get an item
router.get('/item/show/:itemSlug', async function(req, res, next) {
	try {
		const item = await Item.findOne({slug: req.params.itemSlug});
		if (item === null) 
			throw new Error('This element doesn\'t exist!');

		res.render('index', { params: JSON.stringify([item]).replace(/<\//g, "<\\/") });
	} catch (err) {
		res.json(JSON.stringify(err.message, Object.getOwnPropertyNames(err)));
	}
});


module.exports = router;