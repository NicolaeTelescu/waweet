'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemRatingTriangle = ItemRatingTriangle;
var useSelector = ReactRedux.useSelector;

function ItemRatingTriangle(props) {
  var imgDimension = "55vh";
  var rating = useSelector(function (state) {
    return state.rating.rating;
  });
  var colorForRating = useSelector(function (state) {
    return state.rating.color;
  });
  var ratingModified = Math.floor(rating / 10) + ',' + rating % 10;
  var triangleStyle = {
    borderRight: "calc(" + imgDimension + "/4) solid " + colorForRating,
    borderTop: "calc(" + imgDimension + "/4) solid " + colorForRating
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "itemPage__rating-triangle",
    style: triangleStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__rating-number"
  }, ratingModified));
}