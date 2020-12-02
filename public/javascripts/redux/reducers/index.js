import ratingReducer from './ratingReducer.js';
import searchReducer from './searchReducer.js';

export var allReducers = Redux.combineReducers({
	rating: ratingReducer,
	search: searchReducer
});