'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterButton = FilterButton;

var _FilterButtonCategories = require("./FilterButtonCategories.js");

function FilterButton(_ref) {
  var categoryChecked = _ref.categoryChecked,
      onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__button"
  }, /*#__PURE__*/React.createElement("a", {
    className: "showItems__dropdownSVG",
    "data-toggle": "dropdown"
  }, /*#__PURE__*/React.createElement(FilterButtonSVG, null)), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-menu p-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-header"
  }, "Categories"), /*#__PURE__*/React.createElement(_FilterButtonCategories.FilterButtonCategories, {
    categoryChecked: categoryChecked,
    onChange: onChange
  })));
}

function FilterButtonSVG(props) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "2em",
    height: "2em",
    viewBox: "0 0 16 16",
    className: "bi bi-list",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
  }));
}