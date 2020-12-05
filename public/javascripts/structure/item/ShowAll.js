'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { SearchingBar } from '../components/SearchingBar.js';
import { Item } from './layout/SearchItem.js';
import { Pagination } from '../layout/Pagination.js';
import { setSearchField } from '../../redux/actions/searchActions.js';

var useState = React.useState;
var useEffect = React.useEffect;
var useSelector = ReactRedux.useSelector;

export function ShowItemsPage(props) {
	return React.createElement(
		'div',
		{ className: 'showItems__mainContent' },
		React.createElement(SearchingBar, null),
		React.createElement(Options, null)
	);
}

function Options(props) {
	var _useState = useState([]),
	    _useState2 = _slicedToArray(_useState, 2),
	    items = _useState2[0],
	    setItems = _useState2[1];

	var useDispatch = ReactRedux.useDispatch();
	var page = useSelector(function (state) {
		return state.search.page;
	});
	var limit = useSelector(function (state) {
		return state.search.limit;
	});
	var search = useSelector(function (state) {
		return state.search.search;
	});
	var category = useSelector(function (state) {
		return state.search.category;
	});

	useEffect(function () {

		fetch('http://www.localhost:3000/items/all?search=' + search + '&category=' + category + '&page=' + page + '&limit=' + limit).then(function (response) {
			return response.json();
		}).then(function (data) {

			useDispatch(setSearchField({ type: 'TOTAL_ELEMENTS', payload: data.totalElements }));

			var itemsToShow = data.items.map(function (el, index) {
				return React.createElement(Item, { key: index, props: el });
			});
			setItems(itemsToShow);
		});
	}, [search, category, page]);

	return React.createElement(
		'div',
		{ className: 'showItems__options' },
		React.createElement(SearchMessage, null),
		items,
		React.createElement(Pagination, { useDispatch: useDispatch })
	);
}

function SearchMessage(props) {

	var search = useSelector(function (state) {
		return state.search.search;
	});
	var totalElements = useSelector(function (state) {
		return state.search.totalElements;
	});

	var searchMessage = 'You searched for \'' + search + '\':';
	var noElementFound = null;

	if (!search) searchMessage = null;
	if (!totalElements) noElementFound = 'No element found!';

	return React.createElement(
		'div',
		null,
		React.createElement(
			'div',
			{ className: 'showItems__item__search-message' },
			searchMessage
		),
		React.createElement(
			'div',
			null,
			noElementFound
		)
	);
}