'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerText = ContainerText;

var _Title = require("./Title.js");

var _Category = require("./Category.js");

var _Rating = require("./Rating.js");

var _ButtonsSVG = require("./ButtonsSVG.js");

var _helpers = require("./helpers.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = React.useState;

function ContainerText(_ref) {
  var errors = _ref.errors;

  var _useState = useState((0, _helpers.initialItemState)()),
      _useState2 = _slicedToArray(_useState, 2),
      item = _useState2[0],
      setItem = _useState2[1];

  return /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text"
  }, /*#__PURE__*/React.createElement(_Title.Title, {
    item: item,
    handleChange: function handleChange(e) {
      return (0, _helpers.handleChange)(e, item, setItem);
    },
    errors: errors
  }), /*#__PURE__*/React.createElement(_Category.Category, {
    handleChange: function handleChange(e) {
      return (0, _helpers.handleChange)(e, item, setItem);
    },
    item: item,
    errors: errors
  }), /*#__PURE__*/React.createElement(_Rating.Rating, null), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__buttons"
  }, /*#__PURE__*/React.createElement(_ButtonsSVG.AcceptButton, null), /*#__PURE__*/React.createElement(_ButtonsSVG.RejectButton, null)));
}