'use strict';

import {setSearchField} from '../../../redux/actions/searchActions.js';

const useSelector = ReactRedux.useSelector;

export function getPaginationParams() {
	const page = useSelector(state => state.search.page);
	const limit = useSelector(state => state.search.limit);
	const totalElements = useSelector(state => state.search.totalElements);
	const totalPages = Math.ceil(totalElements / limit);

	return {page, limit, totalElements, totalPages};
}

export function getBoundaryPages(page, totalPages) {
	const firstPage = page == 1 ? true : false;
	const lastPage = page == totalPages ? true : false;
	const betweenPages = (firstPage || lastPage) ? false : true;

	return {firstPage, lastPage, betweenPages};
}

export function getLabels(page, totalPages) {
	let labels = [];

	const {firstPage, lastPage, betweenPages} = getBoundaryPages(page, totalPages);

	if (totalPages < 3) {
		for (let i = 1; i <= totalPages; i++) {
			labels.push(i);
		}
	}
	else if (firstPage) labels = [1, 2, 3];
	else if (lastPage) labels = [totalPages - 2, totalPages - 1, totalPages];
	else if (betweenPages) labels = [page - 1, page, page + 1];

	return labels;
}

export function goToPage(page, useDispatch) {
	useDispatch(setSearchField({type: 'PAGE', payload: page}));
}