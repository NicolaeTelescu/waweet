'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Footer = /*#__PURE__*/function (_React$Component) {
  _inherits(Footer, _React$Component);

  var _super = _createSuper(Footer);

  function Footer(props) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "footer"
      }, /*#__PURE__*/React.createElement(FooterEatingTime, null), /*#__PURE__*/React.createElement(FooterTime, null));
    }
  }]);

  return Footer;
}(React.Component);

exports.Footer = Footer;

var FooterEatingTime = /*#__PURE__*/function (_React$Component2) {
  _inherits(FooterEatingTime, _React$Component2);

  var _super2 = _createSuper(FooterEatingTime);

  function FooterEatingTime(props) {
    var _this2;

    _classCallCheck(this, FooterEatingTime);

    _this2 = _super2.call(this, props);
    var date = new Date();
    var remainingTimeUpdate = (60 - date.getMinutes() - 1) * 60000 + (60 - date.getSeconds()) * 1000;
    _this2.state = {
      date: date
    }; // For updating the output

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
      this.setState({
        // For updating the output
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
      return /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: "20px"
        }
      }, " ", dayPeriod, " Time ");
    }
  }]);

  return FooterEatingTime;
}(React.Component);

var FooterTime = /*#__PURE__*/function (_React$Component3) {
  _inherits(FooterTime, _React$Component3);

  var _super3 = _createSuper(FooterTime);

  function FooterTime(props) {
    var _this4;

    _classCallCheck(this, FooterTime);

    _this4 = _super3.call(this, props);
    var date = new Date();
    var seconds = date.getSeconds();
    var remainingTimeUpdate = (60 - seconds) * 1000;
    _this4.state = {
      date: date
    }; // For updating the output

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

      this.setState({
        // For updating the output
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
      var minutes = Time.getMinutes(); // Setting the time accordingly

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

      return /*#__PURE__*/React.createElement("div", null, hours, ":", minutes, " ", partOfTheDay, " - ", days[day], " ", dayNumber, ", ", months[month], " ", year);
    }
  }]);

  return FooterTime;
}(React.Component);