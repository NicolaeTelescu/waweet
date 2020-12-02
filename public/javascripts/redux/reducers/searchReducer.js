var initialState = {
	search: '',
	category: '',
	page: 1,
	limit: 5,
	totalElements: 0
};

var searchReducer = function searchReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];


	switch (action.type) {
		case 'SEARCH':
			return Object.assign({}, state, {
				search: action.payload
			});
		case 'CATEGORY':
			return Object.assign({}, state, {
				category: action.payload
			});
		case 'PAGE':
			return Object.assign({}, state, {
				page: action.payload
			});
		case 'LIMIT':
			return Object.assign({}, state, {
				limit: action.payload
			});
		case 'TOTAL_ELEMENTS':
			return Object.assign({}, state, {
				totalElements: action.payload
			});
		default:
			return state;
	}
};

export default searchReducer;