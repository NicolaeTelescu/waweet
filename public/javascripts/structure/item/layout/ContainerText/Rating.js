'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rating = Rating;

var _helpers = require("./helpers.js");

var useSelector = ReactRedux.useSelector;
var useEffect = React.useEffect;

function Rating(_ref) {
  var item = _ref.item;
  var useDispatch = ReactRedux.useDispatch();
  var rating = useSelector(function (state) {
    return state.rating.rating;
  });
  var textForRating = useSelector(function (state) {
    return state.rating.text;
  });
  var colorForRating = useSelector(function (state) {
    return state.rating.color;
  });
  useEffect(function () {
    return (0, _helpers.setRatingItem)(item, useDispatch);
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-category"
  }, "Rating:"), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-value"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundColor: colorForRating
    }
  }, textForRating)), /*#__PURE__*/React.createElement("input", {
    className: "itemPage__range custom-range",
    name: "rating",
    type: "range",
    onChange: function onChange(e) {
      return (0, _helpers.handleChangeRating)(e, useDispatch);
    },
    min: "0",
    max: "100",
    value: rating
  }));
}