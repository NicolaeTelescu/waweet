'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { SearchingBar } from './components/SearchingBar.js';
import { Item } from './components/Home_Item.js';
import { Pagination } from './layout/Pagination.js';

var useState = React.useState;
var useEffect = React.useEffect;
var useSelector = ReactRedux.useSelector;

export function HomePage(props) {
	return React.createElement(
		'div',
		{ className: 'home__mainContent' },
		React.createElement(Title, null),
		React.createElement(SearchingBar, null),
		React.createElement(Options, null)
	);
}

function Title(props) {
	return React.createElement(
		'div',
		{ className: 'title' },
		React.createElement(
			'h1',
			null,
			'What are we eating ',
			React.createElement(
				'span',
				{ className: 'home__todayTitle', style: { color: "red" } },
				'today'
			),
			'?'
		)
	);
}

function Options(props) {
	var _useState = useState([]),
	    _useState2 = _slicedToArray(_useState, 2),
	    items = _useState2[0],
	    setItems = _useState2[1];

	var useDispatch = ReactRedux.useDispatch();
	var page = useSelector(function (state) {
		return state.pagination.page;
	});
	var limit = useSelector(function (state) {
		return state.pagination.limit;
	});

	useEffect(function () {
		var data = params.items.concat(params.items);

		var itemsToShow = data.filter(function (el, index) {
			if (index >= limit * (page - 1) && index < limit * page) return true;
		}).map(function (el, index) {
			return React.createElement(Item, { key: index, props: el });
		});
		setItems(itemsToShow);
	}, [page]);

	return React.createElement(
		'div',
		{ className: 'home_options' },
		React.createElement(SearchMessage, null),
		items,
		React.createElement(Pagination, { useDispatch: useDispatch })
	);
}

function SearchMessage(props) {

	if (!params.search) return null;

	return React.createElement(
		'div',
		{ className: 'home__item__search-message' },
		params.search
	);
}