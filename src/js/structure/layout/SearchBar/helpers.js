'use strict';

import {setSearchField} from '../../../redux/actions/searchActions.js';

export function initStateSearchBar() {
	const url = new URL(window.location.href);
	const searchURL = url.searchParams.get('search') ? url.searchParams.get('search') : '';
	const categoryURL = url.searchParams.get('category') ? url.searchParams.get('category') : '';

	const initialState = {
		search: searchURL,
		category: categoryURL
	};

	return initialState;
}


export function handleChange(event, entity, setEntity) {
	setEntity({
		...entity,
		[event.target.name]: event.target.value
	});
}


export function handleSubmit(event, searchBar, useDispatch) {
	useDispatch(setSearchField({type: 'SEARCH', payload: searchBar.search}));
	useDispatch(setSearchField({type: 'CATEGORY', payload: searchBar.category}));
}


export function onKeyDown(event, searchBar, useDispatch) {	
	if (event.key === 'Enter') {
		handleSubmit(event, searchBar, useDispatch);
	}
}