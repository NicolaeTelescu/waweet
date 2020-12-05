'use strict';

import { SearchingBar } from './layout/SearchingBar.js';
import { Item } from './item/layout/SearchItem.js';
import { Pagination } from './layout/Pagination.js';
import { setSearchField } from './../redux/actions/searchActions.js';

var useState = React.useState;
var useEffect = React.useEffect;
var useSelector = ReactRedux.useSelector;

export function HomePage(props) {

	return React.createElement(
		'div',
		{ className: 'home__container' },
		React.createElement(Title, null),
		React.createElement(Categories, null)
	);
}

function Title(props) {
	return React.createElement(
		'div',
		{ className: 'home__title' },
		React.createElement(
			'h1',
			null,
			'What are we eating ',
			React.createElement(
				'span',
				{ className: 'showItems__todayTitle', style: { color: "red" } },
				'today'
			),
			'?'
		)
	);
}

function Categories(props) {

	var goTo = function goTo(href) {
		window.location.href = href;
	};

	var categories = ['Breakfast', 'Lunch', 'Snack', 'Dinner'].map(function (el, index) {
		return React.createElement(
			'div',
			{ className: 'home__category    shadow-lg', key: index, onClick: function onClick() {
					return goTo('/items?category=' + el);
				} },
			React.createElement(
				'div',
				{ className: 'home__category-label', style: { bottom: "5px", left: "6px" } },
				el
			),
			React.createElement('img', { className: 'home__category-img', style: { objectPosition: index === 2 ? 'bottom' : '' }, src: '/images/structure/' + el + '.jpg' })
		);
	});

	return React.createElement(
		'div',
		{ className: 'home__categories' },
		categories
	);
}