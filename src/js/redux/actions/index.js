
export const setRating = (rating) => {
	return { 
		type: 'number',
		rating: rating
	};
};

export const setPaginateDetails = (details) => {
	return {
		type: 'details',
		page: details.page,
		limit: details.limit
	}
}