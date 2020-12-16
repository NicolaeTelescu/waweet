'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangePageButton = ChangePageButton;

var _ButtonsSVG = require("./ButtonsSVG.js");

function ChangePageButton(_ref) {
  var direction = _ref.direction,
      inactiveButtonPage = _ref.inactiveButtonPage,
      changePage = _ref.changePage;
  return /*#__PURE__*/React.createElement("li", {
    className: "page-item" + (inactiveButtonPage ? " disabled" : '')
  }, /*#__PURE__*/React.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      if (!inactiveButtonPage) changePage();
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_ButtonsSVG.ChangePageButtonSVG, {
    direction: direction
  }))));
}