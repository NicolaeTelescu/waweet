'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

import { setRating } from '../../../redux/actions/index.js';

var useSelector = ReactRedux.useSelector;
var useState = React.useState;
var useEffect = React.useEffect;

export function ContainerText(_ref) {
	var errors = _ref.errors;

	var _useState = useState({
		title: params.form ? params.form.title : "",
		category: params.form ? params.form.category : "Set the category"
	}),
	    _useState2 = _slicedToArray(_useState, 2),
	    item = _useState2[0],
	    setItem = _useState2[1];

	var handleInputChange = function handleInputChange(event) {
		var name = event.target.name;

		var newItem = Object.assign({}, item);
		newItem[name] = event.target.value;
		setItem(newItem);
	};

	return React.createElement(
		'div',
		{ className: 'itemPage__details-text' },
		React.createElement(Title, { item: item, handleInputChange: handleInputChange, errors: errors }),
		React.createElement(Category, { handleInputChange: handleInputChange, item: item, errors: errors }),
		React.createElement(Rating, null),
		React.createElement(
			'div',
			{ className: 'itemPage__buttons' },
			React.createElement(AcceptButton, null),
			React.createElement(RejectButton, null)
		)
	);
}

function Title(_ref2) {
	var item = _ref2.item,
	    handleInputChange = _ref2.handleInputChange,
	    errors = _ref2.errors;

	return React.createElement(
		'div',
		null,
		React.createElement(
			'div',
			{ className: 'itemPage__details-text-category' },
			React.createElement(
				'span',
				null,
				'Title:'
			),
			React.createElement(
				'span',
				{ className: 'itemPage__details-text-value-error' },
				errors.titleError ? errors.titleError.msg : null
			)
		),
		React.createElement(
			'div',
			{ className: 'itemPage__details-text-value' },
			React.createElement('input', { className: 'form-control', name: 'title', type: 'text', maxLength: '25', onChange: handleInputChange, placeholder: 'Product title', value: item.title })
		)
	);
}

function Category(_ref3) {
	var handleInputChange = _ref3.handleInputChange,
	    item = _ref3.item,
	    errors = _ref3.errors;


	var categories = params.categories.map(function (category, index) {
		return React.createElement(
			'option',
			{ key: index, value: category.name },
			category.name
		);
	});

	return React.createElement(
		'div',
		null,
		React.createElement(
			'div',
			{ className: 'itemPage__details-text-category' },
			React.createElement(
				'span',
				null,
				'Category:'
			),
			React.createElement(
				'span',
				{ className: 'itemPage__details-text-value-error' },
				errors.categoryError ? errors.categoryError.msg : null
			)
		),
		React.createElement(
			'div',
			{ className: 'itemPage__details-text-value' },
			React.createElement(
				'select',
				{ className: 'custom-select', name: 'category', value: item.category, onChange: handleInputChange },
				React.createElement(
					'option',
					{ defaultValue: true },
					'- Set the category -'
				),
				categories
			)
		)
	);
}

function Rating(_ref4) {
	_objectDestructuringEmpty(_ref4);

	var useDispatch = ReactRedux.useDispatch();

	var rating = useSelector(function (state) {
		return state.rating;
	});
	var textForRating = useSelector(function (state) {
		return state.text;
	});
	var colorForRating = useSelector(function (state) {
		return state.color;
	});

	var myStyle = {
		backgroundColor: colorForRating
	};

	var handleChangeRating = function handleChangeRating(event) {
		useDispatch(setRating(event.target.value));
	};

	useEffect(function () {
		if (params.form) useDispatch(setRating(params.form.rating));
	}, []);

	return React.createElement(
		'div',
		null,
		React.createElement(
			'div',
			{ className: 'itemPage__details-text-category' },
			'Rating:'
		),
		React.createElement(
			'div',
			{ className: 'itemPage__details-text-value' },
			React.createElement(
				'span',
				{ style: myStyle },
				textForRating
			)
		),
		React.createElement('input', { className: 'itemPage__range custom-range', name: 'rating', type: 'range', onChange: handleChangeRating, min: '0', max: '100', value: rating })
	);
}

function AcceptButton(props) {
	return React.createElement(
		'a',
		{ onClick: function onClick() {
				document.getElementById("itemForm").submit();
			} },
		React.createElement(
			'svg',
			{ width: '1em', height: '1em', viewBox: '0 0 16 16', className: 'itemPage__button__accept bi bi-check2', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
			React.createElement('path', { fillRule: 'evenodd', d: 'M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' })
		)
	);
}

function RejectButton(props) {
	return React.createElement(
		'a',
		{ href: '/' },
		React.createElement(
			'svg',
			{ width: '1em', height: '1em', viewBox: '0 0 16 16', className: 'itemPage__button__reject bi bi-x', fill: 'currentColor', xmlns: 'http://www.w3.org/2000/svg' },
			React.createElement('path', { fillRule: 'evenodd', d: 'M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' })
		)
	);
}