const express = require('express');
const router = express.Router();
const Item = require('../../Database/models/Item');
const Category = require('../../Database/models/Category');
const { body, validationResult } = require('express-validator');
const { itemAddValidation } = require('../../src/validators/itemValidators');
const helpers = require('../../src/helpers/index');



// Page for adding an item
router.get('/items/add', async function(req, res, next) {
	return res.sendFile('index.html', {root: './public/html'});
});
  
  
  
// Add a new item
router.post('/items/add',
	itemAddValidation,
	async function(req, res, next) {
  
		// Validation
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json(errors.array());
		}
		
		// Adding the item to the database
		try {
			const count = await Item.countDocuments({});
	
			// Uploading image
			if (req.files === null) {
				return res.status(422).json({errors: [{msg: 'Image is required'}]});
			}
	
			const image = req.files.image;
			const imageName = './public/images/eating/' + (count + 1) + '.jpg';
			const imageNameSmall = './public/images/eating-small/' + (count + 1) + '-small.jpg';
	
			image.mv(imageName, function(err) {
				if (err)
					return res.status(500).send(err);
		
				// Convert the image to a small dimension for homepage
				helpers.jimp([{src: imageName, dest: imageNameSmall}], 200, 80);
			});
			
	
			// Insert item to the database
			const item = new Item({
				ID: count + 1,
				title: req.body.title,
				category: req.body.category,
				rating: req.body.rating,
				slug: helpers.convertToSlug(req.body.title),
				show: true
			});
	
			const savedItem = await item.save();
			
			req.session.success = `\'${req.body.title}\' has been added successfully`;
			req.session.save();
			return res.status(200).json({ status: 'OK' });

		} catch (err) {
			return res.status(422).json([{value: 'DB', msg: err.message, param: 'title', location: body}]);
		}
	}
);


module.exports = router;