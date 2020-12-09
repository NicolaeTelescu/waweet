'use strict';

import {ChangePageButton} from './ChangePageButton.js';
import {NumberButtons} from './NumberButtons.js';
import {getPaginationParams, getBoundaryPages, goToPage} from './helpers.js';


export function Pagination(props) {

	const useDispatch = ReactRedux.useDispatch();
	const {page, limit, totalElements, totalPages} = getPaginationParams();
	const {firstPage, lastPage, betweenPages} = getBoundaryPages(page, totalPages);

	if (totalPages == 0) return null;

	return (
		<nav className="showItems__pagination-nav">
			<ul className="pagination">
				<ChangePageButton direction='begin' inactiveButtonPage={firstPage} changePage={() => goToPage(1, useDispatch)} />
				<ChangePageButton direction='left' inactiveButtonPage={firstPage} changePage={() => goToPage(page - 1, useDispatch)} />

				<NumberButtons page={page} totalPages={totalPages} useDispatch={useDispatch} />
				
				<ChangePageButton direction='right' inactiveButtonPage={lastPage} changePage={() => goToPage(page + 1, useDispatch)} />
				<ChangePageButton direction='end' inactiveButtonPage={lastPage} changePage={() => goToPage(totalPages, useDispatch)} />
			</ul>
		</nav>
	);
}