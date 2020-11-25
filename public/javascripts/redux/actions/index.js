
export var setRating = function setRating(rating) {
	return {
		type: 'number',
		rating: rating
	};
};

export var setPaginateDetails = function setPaginateDetails(details) {
	return {
		type: 'details',
		page: details.page,
		limit: details.limit
	};
};