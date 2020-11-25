'use strict';

import {setPaginateDetails} from './../../redux/actions/index.js';

const useSelector = ReactRedux.useSelector;

export function Pagination({useDispatch}) {

	let labels = [];

	const page = useSelector(state => state.pagination.page);
	const limit = useSelector(state => state.pagination.limit);
	const totalPages = Math.ceil((params.items.length * 2) / limit);

	if (totalPages == 0) return null;
	

	const firstPage = page == 1 ? true : false;
	const lastPage = page == totalPages ? true : false;
	const betweenPages = (firstPage || lastPage) ? false : true;

	if (totalPages < 3) {
		for (let i = 1; i <= totalPages; i++) {
			labels.push(i);
		}
	}
	else if (firstPage) labels = [1, 2, 3];
	else if (lastPage) labels = [totalPages - 2, totalPages - 1, totalPages];
	else if (betweenPages) labels = [page - 1, page, page + 1];

	const buttons = labels.map((el, index) => (
		<li className={"page-item" + ((page == labels[index]) ? " active" : '')} key={index}>
			<a className="page-link" onClick={() => {goToPage(labels[index])}}>
				{labels[index]}
			</a>
		</li>
	));

	const goToPage = (page) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		useDispatch(setPaginateDetails({page: page, limit: 5}));
	};

	return (
		<nav className="home__pagination-nav">
			<ul className="pagination">
				<ChangePageButton direction='begin' inactivePage={firstPage} nextPage={1} goToPage={goToPage} />
				<ChangePageButton direction='left' inactivePage={firstPage} nextPage={page - 1} goToPage={goToPage} />

				{buttons}
				
				<ChangePageButton direction='right' inactivePage={lastPage} nextPage={page + 1} goToPage={goToPage} />
				<ChangePageButton direction='end' inactivePage={lastPage} nextPage={totalPages} goToPage={goToPage} />
			</ul>
		</nav>
	);
}


function ChangePageButton({direction, inactivePage, nextPage, goToPage}) {
	
	return (
		<li className={"page-item" + (inactivePage ? " disabled" : '')}>
			<a className="page-link" onClick={() => {if (!inactivePage) goToPage(nextPage)}}>
				<span><ChangePageButtonSVG direction={direction} /></span>
			</a>
		</li>
	);
}

function ChangePageButtonSVG({direction}) {
	if (direction == 'left')
		return (
			<svg width="0.5em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
			</svg>
		);
	if (direction == 'right')
		return (
			<svg width="0.5em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
			</svg>
		);
	if (direction == 'begin')
		return (
			<svg width="0.5em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
				<path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
			</svg>
		);
	if (direction == 'end')
		return (
			<svg width="0.5em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
				<path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
			</svg>
		);
}