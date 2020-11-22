const Item = require('../../Database/models/Item');
const Category = require('../../Database/models/Category');
const helpers = require('../helpers/index');
const { body, param } = require('express-validator');

const titleLength = body('title', 'Your title must be between 4 and 25 characters').isLength({min: 4, max: 25});
const addTitleInUse =
	body('title').custom(title => {
		return Item.find({slug: helpers.convertToSlug(title)}).then(items => {
			if (items.length > 0) {
				return Promise.reject('Title already in use');
			}
		});
	});
const editTitleInUse =
	body('title', 'Title already in use').custom((title, {req}) => {
		const newSlug = helpers.convertToSlug(title);
		const oldSlug = req.params.itemSlug;
		
		if (newSlug !== oldSlug) {
			return Item.find({slug: newSlug}).then(items => {
				if (items.length > 0) {
					return Promise.reject('Title already in use');
				}
			});
		}
		
		return true;
	});
	

const categoryRequired =
	body('category').custom(value => {
		return Category.find({name: value}).then(category => {
			if (category.length === 0) {
				return Promise.reject('Category is not selected');
			}
		});
	});

const imageAdded = body('image-validation', 'Image is required').equals('true');





// Validators
const itemAddValidation = [
	titleLength,
	addTitleInUse,
	categoryRequired,
	imageAdded
];


const itemEditValidation = [
	titleLength,
	editTitleInUse,
	categoryRequired
];


module.exports = {
	itemAddValidation: itemAddValidation,
	itemEditValidation: itemEditValidation
}