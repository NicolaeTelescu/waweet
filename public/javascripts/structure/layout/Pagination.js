'use strict';

import { setPaginateDetails } from './../../redux/actions/index.js';

var useSelector = ReactRedux.useSelector;

export function Pagination(_ref) {
	var useDispatch = _ref.useDispatch;


	var labels = [];

	var page = useSelector(function (state) {
		return state.pagination.page;
	});
	var limit = useSelector(function (state) {
		return state.pagination.limit;
	});
	var totalPages = Math.ceil(params.items.length * 2 / limit);

	if (totalPages == 0) return null;

	var firstPage = page == 1 ? true : false;
	var lastPage = page == totalPages ? true : false;
	var betweenPages = firstPage || lastPage ? false : true;

	if (totalPages < 3) {
		for (var i = 1; i <= totalPages; i++) {
			labels.push(i);
		}
	} else if (firstPage) labels = [1, 2, 3];else if (lastPage) labels = [totalPages - 2, totalPages - 1, totalPages];else if (betweenPages) labels = [page - 1, page, page + 1];

	var buttons = labels.map(function (el, index) {
		return React.createElement(
			'li',
			{ className: "page-item" + (page == labels[index] ? " active" : ''), key: index },
			React.createElement(
				'a',
				{ className: 'page-link', onClick: function onClick() {
						goToPage(labels[index]);
					} },
				labels[index]
			)
		);
	});

	var goToPage = function goToPage(page) {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		useDispatch(setPaginateDetails({ page: page, limit: 5 }));
	};

	return React.createElement(
		'nav',
		{ className: 'home__pagination-nav' },
		React.createElement(
			'ul',
			{ className: 'pagination' },
			React.createElement(ChangePageButton, { direction: 'begin', inactivePage: firstPage, nextPage: 1, goToPage: goToPage }),
			React.createElement(ChangePageButton, { direction: 'left', inactivePage: firstPage, nextPage: page - 1, goToPage: goToPage }),
			buttons,
			React.createElement(ChangePageButton, { direction: 'right', inactivePage: lastPage, nextPage: page + 1, goToPage: goToPage }),
			React.createElement(ChangePageButton, { direction: 'end', inactivePage: lastPage, nextPage: totalPages, goToPage: goToPage })
		)
	);
}

function ChangePageButton(_ref2) {
	var direction = _ref2.direction,
	    inactivePage = _ref2.inactivePage,
	    nextPage = _ref2.nextPage,
	    goToPage = _ref2.goToPage;


	return React.createElement(
		'li',
		{ className: "page-item" + (inactivePage ? " disabled" : '') },
		React.createElement(
			'a',
			{ className: 'page-link', onClick: function onClick() {
					if (!inactivePage) goToPage(nextPage);
				} },
			React.createElement(
				'span',
				null,
				React.createElement(ChangePageButtonSVG, { direction: direction })
			)
		)
	);
}

function ChangePageButtonSVG(_ref3) {
	var direction = _ref3.direction;

	if (direction == 'left') return React.createElement(
		'svg',
		{ width: '0.5em', height: '1em', viewBox: '0 0 16 16', className: 'bi bi-chevron-left', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
		React.createElement('path', { fillRule: 'evenodd', d: 'M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z' })
	);
	if (direction == 'right') return React.createElement(
		'svg',
		{ width: '0.5em', height: '1em', viewBox: '0 0 16 16', className: 'bi bi-chevron-right', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
		React.createElement('path', { fillRule: 'evenodd', d: 'M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z' })
	);
	if (direction == 'begin') return React.createElement(
		'svg',
		{ width: '0.5em', height: '1em', viewBox: '0 0 16 16', className: 'bi bi-chevron-double-left', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
		React.createElement('path', { fillRule: 'evenodd', d: 'M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z' }),
		React.createElement('path', { fillRule: 'evenodd', d: 'M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z' })
	);
	if (direction == 'end') return React.createElement(
		'svg',
		{ width: '0.5em', height: '1em', viewBox: '0 0 16 16', className: 'bi bi-chevron-double-right', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
		React.createElement('path', { fillRule: 'evenodd', d: 'M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z' }),
		React.createElement('path', { fillRule: 'evenodd', d: 'M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z' })
	);
}