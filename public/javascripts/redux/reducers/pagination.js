var paginationDetails = function paginationDetails() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { page: 1, limit: 5 };
	var action = arguments[1];


	if (action.type !== 'details') {
		return state;
	}

	return {
		page: action.page,
		limit: action.limit
	};
};

export default paginationDetails;