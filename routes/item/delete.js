const express = require('express');
const router = express.Router();
const Item = require('../../Database/models/Item');
const Category = require('../../Database/models/Category');



// Delete an item
router.post('/items/delete/:itemSlug', async function(req, res, next) {
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
		req.session.save();
		return res.status(200).json({ status: 'OK' });

	} catch (err) {
		return res.status(422).send(err.message);
	}
});



// Restore elements
router.get('/items/delete/restoreElements', async function(req, res, next) {
	try {
		const updatedItems = await Item.updateMany(
			{ },
			{ $set: {show: true} }
		);
		return res.status(200).json({ status: 'OK' });

	} catch (err) {
		return res.status(422).send(err.message);
	}
});


module.exports = router;