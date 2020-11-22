const express = require('express');
const router = express.Router();
const fs = require('fs');
const Item = require('../../Database/models/Item');
const Category = require('../../Database/models/Category');
const { body, validationResult } = require('express-validator');
const { itemEditValidation } = require('../../src/validators/itemValidators');
const helpers = require('../../src/helpers/index');


// Page for edit a new item
router.get('/item/edit/:itemSlug', async function(req, res, next) {
	try {
		const categories = await Category.find();
		const item = await Item.findOne({slug: req.params.itemSlug});

	  	const params = {
			categories: categories,
			form: req.session.form ? req.session.form : item,
			errors: req.session.errors
	  	}
  
	  	req.session.destroy();
  
	  	res.render('index', { params: JSON.stringify(params).replace(/<\//g, "<\\/") });
	} catch (err) {
	  	res.json(JSON.stringify(err.message, Object.getOwnPropertyNames(err)));
	}
});
  
  
  
// Update a new item
router.post('/item/edit/:itemSlug',
	itemEditValidation,
	async function(req, res, next) {
		
		const item = await Item.findOne({slug: req.params.itemSlug});
		const updatedFields = {
			title: req.body.title,
			category: req.body.category,
			rating: req.body.rating,
			slug: helpers.convertToSlug(req.body.title)
		};
		
		const form = Object.assign(item, updatedFields);

		// Validation
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			req.session.form = form;
			req.session.errors = errors.array();
	
			return res.redirect('/item/edit/' + req.params.itemSlug);
		}


		// Updating the item in the database
		try {
			
			// Update item in the database
			const updatedItem = await Item.updateOne(
				{ _id: item._id },
				{ $set: item }
			);

			// Updating the image
			if (req.files !== null) {
			
				// Delete the old pictures
				fs.unlinkSync('./public/images/eating/' + item.ID + '.jpg');
				fs.unlinkSync('./public/images/eating-small/' + item.ID + '-small.jpg');


				const image = req.files.image;
				const imageName = './public/images/eating/' + item.ID + '.jpg';
				const imageNameSmall = './public/images/eating-small/' + item.ID + '-small.jpg';
		
				image.mv(imageName, function(err) {
					if (err)
						return res.status(500).send(err);
			
					// Convert the image to a small dimension for homepage
					helpers.jimp([{src: imageName, dest: imageNameSmall}], 200, 90);
				});
			}
			
			req.session.success = 'The item has edited with success';
			req.session.errors = false;
			res.redirect('/');

		} catch (err) {
			res.json(JSON.stringify(err.message, Object.getOwnPropertyNames(err)));
		}
});

module.exports = router;