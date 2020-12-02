import ratingReducer from './ratingReducer.js';
import searchReducer from './searchReducer.js';

export const allReducers = Redux.combineReducers({
	rating: ratingReducer,
	search: searchReducer
});