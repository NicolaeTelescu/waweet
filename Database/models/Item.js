const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema ({
	ID: {
		type: Number,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true
	},
	rating: Number
});

module.exports = mongoose.model('Items', ItemSchema);