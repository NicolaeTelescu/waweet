'use strict';

import {setSearchField} from '../../../redux/actions/searchActions.js';
import {Item} from '../layout/SearchItem.js';


export function fetchItemsToShow(setItems, useDispatch) {

	const {pageURL, searchURL, categoryURL} = getParametersURL();
	setURLParametersToState({pageURL, searchURL, categoryURL}, useDispatch);

	fetch(`http://www.localhost:3000/items/all?search=${searchURL}&category=${categoryURL}&page=${pageURL}`)
		.then(response => response.json())
		.then(data => {

			useDispatch(setSearchField({type: 'TOTAL_ELEMENTS', payload: data.totalElements}));

			const itemsToShow = data.items
				.map((el, index) => (
					<Item key={index} props={el} />
				));
			
			// From now, if some variables change, you can change the page
			setItems({
				data: itemsToShow,
				changeable: true
			});
		});
}


function getParametersURL() {
	const url = new URL(window.location.href);
	const pageURL = url.searchParams.get('page') ? Number(url.searchParams.get('page')) : 1;
	const searchURL = url.searchParams.get('search') ? url.searchParams.get('search') : '';
	const categoryURL = url.searchParams.get('category') ? url.searchParams.get('category') : '';

	return {pageURL, searchURL, categoryURL};
}


function setURLParametersToState({pageURL, searchURL, categoryURL}, useDispatch) {
	useDispatch(setSearchField({type: 'PAGE', payload: pageURL}));
	useDispatch(setSearchField({type: 'SEARCH', payload: searchURL}));
	useDispatch(setSearchField({type: 'CATEGORY', payload: categoryURL}));
}


export function changeURLPageReset(changeable, {search, category}) {
	if (changeable)
		window.location.href = `http://www.localhost:3000/items?search=${search}&category=${category}`;
}

export function changeURL(changeable, {search, category, page}) {
	if (changeable)
		window.location.href = `http://www.localhost:3000/items?search=${search}&category=${category}&page=${page}`;
}