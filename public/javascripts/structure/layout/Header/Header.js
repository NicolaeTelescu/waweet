'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = Header;

var _searchActions = require("../../../redux/actions/searchActions.js");

var _helpers = require("./helpers.js");

function Header(props) {
  var buttons = [{
    name: 'Homepage',
    href: '/'
  }, {
    name: 'All products',
    href: '/items'
  }].map(function (el, index) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-warning header__categoryButton",
      onClick: function onClick() {
        return (0, _helpers.goTo)(el.href);
      },
      key: index
    }, el.name);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, buttons);
}