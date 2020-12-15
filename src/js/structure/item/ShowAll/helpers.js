'use strict';

import {setSearchField} from '../../../redux/actions/searchActions.js';
import {Item} from '../layout/SearchItem/SearchItem.js';

const useSelector = ReactRedux.useSelector;


export function fetchItemsToShow(setItems, useDispatch) {

	const {pageURL, searchURL, categoryURL} = getParamsURL();
	setParamsToState({page: pageURL, search: searchURL, category: categoryURL}, useDispatch);

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


function getParamsURL() {
	const url = new URL(window.location.href);
	const pageURL = url.searchParams.get('page') ? Number(url.searchParams.get('page')) : 1;
	const searchURL = url.searchParams.get('search') ? url.searchParams.get('search') : '';
	const categoryURL = url.searchParams.get('category') ? url.searchParams.get('category') : '';

	return {pageURL, searchURL, categoryURL};
}


function setParamsToState({page, search, category}, useDispatch) {
	useDispatch(setSearchField({type: 'PAGE', payload: page}));
	useDispatch(setSearchField({type: 'SEARCH', payload: search}));
	useDispatch(setSearchField({type: 'CATEGORY', payload: category}));
}


export function changeURLPageReset(changeable, {search, category}) {
	if (changeable)
		window.location.href = `http://www.localhost:3000/items?search=${search}&category=${category}`;
}

export function changeURL(changeable, {search, category, page}) {
	if (changeable)
		window.location.href = `http://www.localhost:3000/items?search=${search}&category=${category}&page=${page}`;
}

export function getStateSearchParams() {
	return {
		page: useSelector(state => state.search.page),
		search: useSelector(state => state.search.search),
		category: useSelector(state => state.search.category)
	};
}

export function deleteFetchElement(slug) {
	fetch('http://www.localhost:3000/items/delete/' + slug, {
		method: 'POST',
		credentials: 'include'
	})
	.then(response => {
		if (!response.ok) {
			response.text()
				.then(message => alert(message));
		}
		else {
			window.location.href = addReceivedMessageURL();
		}
	});
}

function addReceivedMessageURL() {
	const url = new URL(window.location.href);

	if (window.location.search == '') 
		return window.location.href + '?receivedMessage=yes'; 
	else if (url.searchParams.get('receivedMessage'))
		return window.location.href;
	else if (window.location.search != '')
		return window.location.href + '&receivedMessage=yes';
}