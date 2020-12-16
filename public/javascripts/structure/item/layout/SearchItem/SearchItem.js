'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = Item;

var _ItemRating = require("./ItemRating.js");

var _ItemText = require("./ItemText.js");

var _ItemBorder = require("./ItemBorder.js");

function Item(_ref) {
  var props = _ref.props;
  var ID = props.ID,
      title = props.title,
      category = props.category,
      rating = props.rating,
      slug = props.slug;
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__item"
  }, /*#__PURE__*/React.createElement(_ItemBorder.ItemBorder, null), /*#__PURE__*/React.createElement("img", {
    className: "showItems__item__img",
    src: "/images/eating-small/" + ID + "-small.jpg"
  }), /*#__PURE__*/React.createElement("a", {
    className: "showItems__item__linkTo",
    href: '/items/show/' + slug
  }, /*#__PURE__*/React.createElement(_ItemRating.ItemRating, {
    rating: rating
  })), /*#__PURE__*/React.createElement(_ItemText.ItemText, {
    title: title,
    category: category,
    slug: slug
  }));
}