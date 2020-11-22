const express = require('express');
const router = express.Router();
const Item = require('../../Database/models/Item');
const Category = require('../../Database/models/Category');

// Delete an item
router.delete('/item', async function(req, res, next) {
	try {
	  
	} catch (err) {
	  res.json(JSON.stringify(err.message, Object.getOwnPropertyNames(err)));
	}
});

module.exports = router;