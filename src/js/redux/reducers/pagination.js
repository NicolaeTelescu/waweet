const paginationDetails = (state = {page: 1, limit: 5}, action) => {
	
	if (action.type !== 'details') {
		return state;
	}

	return {
		page: action.page,
		limit: action.limit
	}
};

export default paginationDetails;