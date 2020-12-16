const initialState = {
	search: '',
	category: '',
	page: 1,
	limit: 5,
	totalElements: 0
};

const searchReducer = (state = initialState, action) => {
	
	switch (action.type) {
		case 'SEARCH':
			return {
				...state,
				search: action.payload
			};
		case 'CATEGORY':
			return {
				...state,
				category: action.payload
			};
		case 'PAGE':
			return {
				...state,
				page: action.payload
			};
		case 'LIMIT':
			return {
				...state,
				limit: action.payload
			};
		case 'TOTAL_ELEMENTS':
			return {
				...state,
				totalElements: action.payload
			};
		default:
			return state;
	}
};

export default searchReducer;