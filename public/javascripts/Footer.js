'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

export var Footer = function (_React$Component) {
	_inherits(Footer, _React$Component);

	function Footer(props) {
		_classCallCheck(this, Footer);

		var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(Footer, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "footer" },
				React.createElement(FooterEatingTime, null),
				React.createElement(FooterTime, null)
			);
		}
	}]);

	return Footer;
}(React.Component);

var FooterEatingTime = function (_React$Component2) {
	_inherits(FooterEatingTime, _React$Component2);

	function FooterEatingTime(props) {
		_classCallCheck(this, FooterEatingTime);

		var _this2 = _possibleConstructorReturn(this, (FooterEatingTime.__proto__ || Object.getPrototypeOf(FooterEatingTime)).call(this, props));

		var date = new Date();
		var remainingTimeUpdate = (60 - date.getMinutes() - 1) * 60000 + (60 - date.getSeconds()) * 1000;

		_this2.state = { date: date }; // For updating the output

		setTimeout(function () {
			_this2.updateClock();
		}, remainingTimeUpdate);
		return _this2;
	}

	_createClass(FooterEatingTime, [{
		key: "updateClock",
		value: function updateClock() {
			var _this3 = this;

			var date = new Date();
			var remainingTimeUpdate = (60 - date.getMinutes() - 1) * 60000 + (60 - date.getSeconds()) * 1000;

			this.setState({ // For updating the output
				date: date
			});

			setTimeout(function () {
				_this3.updateClock();
			}, remainingTimeUpdate);
		}
	}, {
		key: "render",
		value: function render() {

			var date = this.state.date;
			var hours = date.getHours();

			var dayPeriod = "Snack";

			if (hours >= 7 && hours < 11) dayPeriod = "Breakfast";
			if (hours >= 12 && hours < 15) dayPeriod = "Lunch";
			if (hours >= 17 && hours < 20) dayPeriod = "Dinner";

			return React.createElement(
				"div",
				{ style: { fontSize: "24px" } },
				" ",
				dayPeriod,
				" Time "
			);
		}
	}]);

	return FooterEatingTime;
}(React.Component);

var FooterTime = function (_React$Component3) {
	_inherits(FooterTime, _React$Component3);

	function FooterTime(props) {
		_classCallCheck(this, FooterTime);

		var _this4 = _possibleConstructorReturn(this, (FooterTime.__proto__ || Object.getPrototypeOf(FooterTime)).call(this, props));

		var date = new Date();
		var seconds = date.getSeconds();
		var remainingTimeUpdate = (60 - seconds) * 1000;

		_this4.state = { date: date }; // For updating the output

		setTimeout(function () {
			_this4.updateClock();
		}, remainingTimeUpdate);
		return _this4;
	}

	_createClass(FooterTime, [{
		key: "updateClock",
		value: function updateClock() {
			var _this5 = this;

			var newDate = new Date();
			var remainingTimeUpdate = (60 - newDate.getSeconds()) * 1000; // I don't put 60000, because setTimeout is not very accurate

			this.setState({ // For updating the output
				date: newDate
			});

			setTimeout(function () {
				_this5.updateClock();
			}, remainingTimeUpdate);
		}
	}, {
		key: "render",
		value: function render() {

			var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

			var Time = this.state.date;
			var year = Time.getFullYear();
			var month = Time.getMonth();
			var dayNumber = Time.getDate();
			var day = Time.getDay();
			var hours = Time.getHours();
			var minutes = Time.getMinutes();

			// Setting the time accordingly
			var partOfTheDay = "AM";

			if (hours == 0) {
				hours = 12;
			} else if (hours == 12) {
				partOfTheDay = "PM";
			} else if (hours > 12) {
				hours -= 12;
				partOfTheDay = "PM";
			}

			if (hours < 10) {
				hours = "0" + hours;
			}
			if (minutes < 10) {
				minutes = "0" + minutes;
			}

			return React.createElement(
				"div",
				null,
				hours,
				":",
				minutes,
				" ",
				partOfTheDay,
				" - ",
				days[day],
				" ",
				dayNumber,
				", ",
				months[month],
				" ",
				year
			);
		}
	}]);

	return FooterTime;
}(React.Component);