'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemText = ItemText;

var _ButtonsSVG = require("./ButtonsSVG.js");

function ItemText(_ref) {
  var title = _ref.title,
      category = _ref.category,
      slug = _ref.slug;
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__details    shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__details-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "showItems__item__title"
  }, /*#__PURE__*/React.createElement("a", {
    href: '/items/show/' + slug
  }, title)), /*#__PURE__*/React.createElement("span", null, category)), /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__details-buttons"
  }, /*#__PURE__*/React.createElement(_ButtonsSVG.EditItemButton, {
    slug: slug
  }), /*#__PURE__*/React.createElement(_ButtonsSVG.DeleteItemButton, {
    slug: slug
  })));
}