'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { SearchingBar } from './components/SearchingBar.js';
import { Item } from './components/Home_Item.js';

var useState = React.useState;
var useEffect = React.useEffect;

export var HomePage = function (_React$Component) {
	_inherits(HomePage, _React$Component);

	function HomePage(props) {
		_classCallCheck(this, HomePage);

		var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(HomePage, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'home__mainContent' },
				React.createElement(Title, null),
				React.createElement(SearchingBar, null),
				React.createElement(Options, null)
			);
		}
	}]);

	return HomePage;
}(React.Component);

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

	useEffect(function () {
		fetch("http://localhost:3000/items").then(function (response) {
			return response.json();
		}).then(function (data) {
			data = data.concat(data);
			setItems(data.map(function (el, index) {
				return React.createElement(Item, { key: index, props: el });
			}));
		});
	}, []);

	return React.createElement(
		'div',
		{ className: 'home_options' },
		items
	);
}