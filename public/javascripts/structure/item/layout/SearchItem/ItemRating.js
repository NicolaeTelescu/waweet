'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemRating = ItemRating;

function ItemRating(_ref) {
  var rating = _ref.rating;
  var ratingModified = rating < 100 ? Math.floor(rating / 10) + "," + rating % 10 : 10;
  var ratingColors = ["#7a0000", "#a30000", "#e00000", "#ff5e00", "#ff9900", "#fff200", "#f6ff00", "#e3fc03", "#c2fc03", "#6fff00", "#00ff22"];
  var triangleColor = ratingColors[Math.floor(rating / 10)];
  var myStyle = {
    borderRight: "25px solid " + triangleColor,
    borderTop: "25px solid " + triangleColor
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__rating    shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__rating-triangle",
    style: myStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__rating-number"
  }, ratingModified)));
}