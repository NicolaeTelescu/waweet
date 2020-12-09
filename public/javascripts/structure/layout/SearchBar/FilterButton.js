'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterButton = FilterButton;

var _FilterButtonCategories = require("./FilterButtonCategories.js");

var _ButtonsSVG = require("./ButtonsSVG.js");

function FilterButton(_ref) {
  var categoryChecked = _ref.categoryChecked,
      onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__button"
  }, /*#__PURE__*/React.createElement("a", {
    className: "showItems__dropdownSVG",
    "data-toggle": "dropdown"
  }, /*#__PURE__*/React.createElement(_ButtonsSVG.FilterButtonSVG, null)), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-menu p-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-header"
  }, "Categories"), /*#__PURE__*/React.createElement(_FilterButtonCategories.FilterButtonCategories, {
    categoryChecked: categoryChecked,
    onChange: onChange
  })));
}