const Item = require('../../Database/models/Item');
const Category = require('../../Database/models/Category');
const helpers = require('../helpers/index');
const { body } = require('express-validator');

const itemValidation = [
	body('title', 'Your title must be between 4 and 25 characters').isLength({min: 4, max: 25}),
	body('title').custom(value => {
		return Item.find({slug: helpers.convertToSlug(value)}).then(item => {
			if (item.length > 0) {
				return Promise.reject('Title already in use');
			}
		});
	}),
	body('category').custom(value => {
		return Category.find({name: value}).then(category => {
			if (category.length === 0) {
				return Promise.reject('Category is not selected');
			}
		});
	}),
	body('image-validation', 'Image is required').equals('true')
];

module.exports = itemValidation;