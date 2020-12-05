'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { setSearchField } from './../../redux/actions/searchActions.js';

var useState = React.useState;

export function SearchingBar(props) {

	var initialState = {
		search: '',
		category: ''
	};

	var _useState = useState(initialState),
	    _useState2 = _slicedToArray(_useState, 2),
	    searchBar = _useState2[0],
	    setSearchBar = _useState2[1];

	var handleChange = function handleChange(event) {
		setSearchBar(Object.assign({}, searchBar, _defineProperty({}, event.target.name, event.target.value)));
	};

	var useDispatch = ReactRedux.useDispatch();
	var handleSubmit = function handleSubmit(event) {
		useDispatch(setSearchField({ type: 'SEARCH', payload: searchBar.search }));
		useDispatch(setSearchField({ type: 'CATEGORY', payload: searchBar.category }));
	};

	var onKeyDown = function onKeyDown(event) {
		if (event.key === 'Enter') {
			handleSubmit();
		}
	};

	return React.createElement(
		'div',
		{ className: 'showItems__searchingBar' },
		React.createElement(AddItemButton, null),
		React.createElement(
			'div',
			{ className: 'showItems__searchFields' },
			React.createElement('input', { type: 'text', name: 'search', className: 'form-control col-3', placeholder: 'Search for something', value: searchBar.search, onChange: handleChange, onKeyDown: onKeyDown }),
			React.createElement(SearchingButton, { onClick: handleSubmit }),
			React.createElement(FilterButton, { onChange: handleChange })
		)
	);
}

function SearchingButton(_ref) {
	var onClick = _ref.onClick;

	return React.createElement(
		'div',
		{ className: 'showItems__button', onClick: onClick },
		React.createElement(
			'svg',
			{ width: '2em', height: '2em', viewBox: '0 0 16 16', className: 'bi bi-search', fillRule: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
			React.createElement('path', { fillRule: 'evenodd', d: 'M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z' }),
			React.createElement('path', { fillRule: 'evenodd', d: 'M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z' })
		)
	);
}

function FilterButton(_ref2) {
	var onChange = _ref2.onChange;


	return React.createElement(
		'div',
		{ className: 'showItems__button' },
		React.createElement(
			'a',
			{ className: 'showItems__dropdownSVG', 'data-toggle': 'dropdown' },
			React.createElement(FilterButtonSVG, null)
		),
		React.createElement(
			'div',
			{ className: 'dropdown-menu p-2' },
			React.createElement(
				'div',
				{ className: 'dropdown-header' },
				'Categories'
			),
			React.createElement(FilterButtonCategories, { onChange: onChange })
		)
	);
}

function FilterButtonCategories(_ref3) {
	var onChange = _ref3.onChange;


	var categories = ['All categories', 'Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Snack'].map(function (el, index) {
		return React.createElement(
			'div',
			{ className: 'dropdown-item', key: index },
			React.createElement(
				'div',
				{ className: 'form-check form-check-inline' },
				React.createElement('input', { className: 'form-check-input', type: 'radio', name: 'category', id: 'categoryOption' + index, onChange: onChange, value: el !== 'All categories' ? el : '', defaultChecked: el === 'All categories' ? true : false }),
				React.createElement(
					'label',
					{ style: { fontSize: "14px" }, className: 'form-check-label', htmlFor: 'categoryOption' + index },
					el
				)
			)
		);
	});
	return React.createElement(
		'div',
		null,
		categories
	);
}

function FilterButtonSVG(props) {
	return React.createElement(
		'svg',
		{ width: '2em', height: '2em', viewBox: '0 0 16 16', className: 'bi bi-list', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
		React.createElement('path', { fillRule: 'evenodd', d: 'M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z' })
	);
}

function AddItemButton(props) {
	return React.createElement(
		'a',
		{ className: 'showItems__button', href: '/items/add' },
		React.createElement(
			'svg',
			{ width: '2em', height: '2em', viewBox: '0 0 16 16', className: 'bi bi-plus', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
			React.createElement('path', { fillRule: 'evenodd', d: 'M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' })
		)
	);
}