const express = require('express');
const router = express.Router();
const Item = require('../../Database/models/Item');
const Category = require('../../Database/models/Category');


// Get an item
router.get('/items/show/:itemSlug', async function(req, res, next) {
	return res.sendFile('index.html', {root: './public/html'});
});


module.exports = router;