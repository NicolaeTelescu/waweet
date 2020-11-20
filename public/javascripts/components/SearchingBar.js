'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

export var SearchingBar = function (_React$Component) {
	_inherits(SearchingBar, _React$Component);

	function SearchingBar(props) {
		_classCallCheck(this, SearchingBar);

		var _this = _possibleConstructorReturn(this, (SearchingBar.__proto__ || Object.getPrototypeOf(SearchingBar)).call(this, props));

		_this.state = { value: "" };

		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	_createClass(SearchingBar, [{
		key: "handleChange",
		value: function handleChange(event) {
			this.setState({ value: event.target.value });
		}
	}, {
		key: "handleSubmit",
		value: function handleSubmit(event) {
			alert("Submit button was clicked");
		}
	}, {
		key: "handleFilter",
		value: function handleFilter(event) {
			alert("Filter button was clicked");
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "home__searchingBar" },
				React.createElement(AddItemButton, null),
				React.createElement(
					"div",
					{ className: "home__searchFields" },
					React.createElement("input", { type: "text", className: "form-control col-3", id: "firstName", placeholder: "Search for something", value: this.state.value, required: "", onChange: this.handleChange }),
					React.createElement(SearchingButton, { onClick: this.handleSubmit }),
					React.createElement(FilterButton, { onClick: this.handleFilter })
				)
			);
		}
	}]);

	return SearchingBar;
}(React.Component);

function SearchingButton(props) {
	return React.createElement(
		"div",
		{ className: "home__button", onClick: props.onClick },
		React.createElement(
			"svg",
			{ width: "2em", height: "2em", viewBox: "0 0 16 16", className: "bi bi-search", fillRule: "currentColor", xmlns: "http://www.w3.org/2000/svg" },
			React.createElement("path", { fillRule: "evenodd", d: "M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" }),
			React.createElement("path", { fillRule: "evenodd", d: "M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" })
		)
	);
}

function FilterButton(props) {
	return React.createElement(
		"div",
		{ className: "home__button", onClick: props.onClick },
		React.createElement(
			"svg",
			{ width: "2em", height: "2em", viewBox: "0 0 16 16", className: "bi bi-list", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" },
			React.createElement("path", { fillRule: "evenodd", d: "M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" })
		)
	);
}

function AddItemButton(props) {
	return React.createElement(
		"a",
		{ className: "home__button", href: "/item/add" },
		React.createElement(
			"svg",
			{ width: "2em", height: "2em", viewBox: "0 0 16 16", className: "bi bi-plus", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" },
			React.createElement("path", { fillRule: "evenodd", d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" })
		)
	);
}