const express = require('express');
const router = express.Router();
const Item = require('../../Database/models/Item');
const Category = require('../../Database/models/Category');



// Delete an item
router.post('/item/delete/:itemSlug', async function(req, res, next) {
	try {

		const itemFilter = {
			slug: req.params.itemSlug,
			show: true
		};

		const item = await Item.findOne(itemFilter);

	  	const deletedItem = await Item.updateOne(
			itemFilter, { $set: {show: false} }
		);
		
		req.session.success = `\'${item.title}\' has been deleted successfully`;
		req.session.errors = false;
		res.redirect('/');

	} catch (err) {
	  res.json(JSON.stringify(err.message, Object.getOwnPropertyNames(err)));
	}
});


module.exports = router;