const express = require('express');
const router = express.Router();
const Item = require('../../Database/models/Item');
const Category = require('../../Database/models/Category');
const { body, validationResult } = require('express-validator');
const { itemAddValidation } = require('../../src/validators/itemValidators');
const helpers = require('../../src/helpers/index');



// Page for adding an item
router.get('/item/add', async function(req, res, next) {
	try {
		const categories = await Category.find();

		const params = {
			categories: categories,
			form: req.session.form,
			errors: req.session.errors
		}
  
		req.session.destroy();
  
	  	res.render('index', { params: JSON.stringify(params).replace(/<\//g, "<\\/") });
	} catch (err) {
	  	res.json(JSON.stringify(err.message, Object.getOwnPropertyNames(err)));
	}
});
  
  
  
// Add a new item
router.post('/item/add',
	itemAddValidation,
	async function(req, res, next) {
  
		const form = {
			title: req.body.title,
			category: req.body.category,
			rating: req.body.rating
		};
  
		// Validation
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			req.session.form = form;
			req.session.errors = errors.array();
	
			return res.redirect('/item/add');
		}
  
  
		// Adding the item to the database
		try {
			const count = await Item.countDocuments({});
	
			// Uploading image
			if (req.files === null) {
				return res.status(400).json({errors: [{msg: 'Image is required'}]});
			}
	
			const image = req.files.image;
			const imageName = './public/images/eating/' + (count + 1) + '.jpg';
			const imageNameSmall = './public/images/eating-small/' + (count + 1) + '-small.jpg';
	
			image.mv(imageName, function(err) {
				if (err)
					return res.status(500).send(err);
		
				// Convert the image to a small dimension for homepage
				helpers.jimp([{src: imageName, dest: imageNameSmall}], 200, 90);
			});
			
	
			// Insert item to the database
			const item = new Item({
				ID: count + 1,
				title: req.body.title,
				category: req.body.category,
				rating: req.body.rating,
				slug: helpers.convertToSlug(req.body.title)
			});
	
			const savedItem = await item.save();
			
			
			req.session.success = `\'${req.body.title}\' has been added successfully`;
			req.session.errors = false;
			res.redirect('/');
		} catch (err) {
			res.json(JSON.stringify(err.message, Object.getOwnPropertyNames(err)));
		}
	}
);


module.exports = router;