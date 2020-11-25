import ratingReducer from './rating.js';
import paginationReducer from './pagination.js';

export var allReducers = Redux.combineReducers({
	rating: ratingReducer,
	pagination: paginationReducer
});