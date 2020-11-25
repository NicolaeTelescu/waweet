import ratingReducer from './rating.js';
import paginationReducer from './pagination.js';

export const allReducers = Redux.combineReducers({
	rating: ratingReducer,
	pagination: paginationReducer
});