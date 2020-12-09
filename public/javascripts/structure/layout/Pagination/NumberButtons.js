'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberButtons = NumberButtons;

var _helpers = require("./helpers.js");

function NumberButtons(_ref) {
  var page = _ref.page,
      totalPages = _ref.totalPages,
      useDispatch = _ref.useDispatch;
  var labels = (0, _helpers.getLabels)(page, totalPages);
  var numberButtons = labels.map(function (el, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: "page-item" + (page == labels[index] ? " active" : ''),
      key: index
    }, /*#__PURE__*/React.createElement("a", {
      className: "page-link",
      onClick: function onClick() {
        (0, _helpers.goToPage)(labels[index], useDispatch);
      }
    }, labels[index]));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, numberButtons);
}