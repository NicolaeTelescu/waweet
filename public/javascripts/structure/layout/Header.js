'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = Header;

var _searchActions = require("./../../redux/actions/searchActions.js");

function Header(props) {
  var buttons = [{
    name: 'Homepage',
    href: '/'
  }, {
    name: 'All products',
    href: '/items'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, /*#__PURE__*/React.createElement(HeaderLinks, {
    data: buttons
  }));
}

function HeaderLinks(_ref) {
  var data = _ref.data;

  var goTo = function goTo(href) {
    window.location.href = href;
  };

  var linkButtons = data.map(function (el, index) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-warning header__categoryButton",
      onClick: function onClick() {
        return goTo(el.href);
      },
      key: index
    }, el.name);
  });
  return /*#__PURE__*/React.createElement("div", null, linkButtons);
}