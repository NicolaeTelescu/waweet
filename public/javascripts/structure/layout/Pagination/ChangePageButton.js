'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangePageButton = ChangePageButton;

var _ButtonsSVG = require("./ButtonsSVG.js");

function ChangePageButton(_ref) {
  var direction = _ref.direction,
      inactivePage = _ref.inactivePage,
      nextPage = _ref.nextPage,
      goToPage = _ref.goToPage;
  return /*#__PURE__*/React.createElement("li", {
    className: "page-item" + (inactivePage ? " disabled" : '')
  }, /*#__PURE__*/React.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      if (!inactivePage) goToPage(nextPage);
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_ButtonsSVG.ChangePageButtonSVG, {
    direction: direction
  }))));
}