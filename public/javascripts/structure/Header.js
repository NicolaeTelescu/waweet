'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

export var Header = function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header(props) {
		_classCallCheck(this, Header);

		var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(Header, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "header" },
				React.createElement(CategoryButton, { name: "Breakfast" }),
				React.createElement(CategoryButton, { name: "Lunch" }),
				React.createElement(CategoryButton, { name: "Dinner" }),
				React.createElement(CategoryButton, { name: "Drinks" }),
				React.createElement(CategoryButton, { name: "All products", href: "/" })
			);
		}
	}]);

	return Header;
}(React.Component);

function CategoryButton(props) {
	return React.createElement(
		"a",
		{ href: props.href },
		React.createElement(
			"button",
			{ type: "button", className: "btn btn-warning header__categoryButton" },
			props.name
		)
	);
}