'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowItemPage = ShowItemPage;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _ratingActions = require("../../../redux/actions/ratingActions.js");

var _helpers = require("./helpers.js");

var useState = React.useState;
var useEffect = React.useEffect;
var useSelector = ReactRedux.useSelector;

function ShowItemPage(props) {
  var _useState = useState({
    rating: 0
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      item = _useState2[0],
      setItem = _useState2[1];

  useEffect(function () {
    return (0, _helpers.getItemFetch)(setItem);
  }, []);
  var useDispatch = ReactRedux.useDispatch();
  useDispatch((0, _ratingActions.setRating)(item.rating));
  var textForRating = useSelector(function (state) {
    return state.rating.text;
  });
  var colorForRating = useSelector(function (state) {
    return state.rating.color;
  });
  var ratingModified = Math.floor(item.rating / 10) + ',' + item.rating % 10;
  var imgDimension = "55vh";
  var triangleStyle = {
    borderRight: "calc(" + imgDimension + "/4) solid " + colorForRating,
    borderTop: "calc(" + imgDimension + "/4) solid " + colorForRating
  };
  if (!item.ID) return /*#__PURE__*/React.createElement("div", {
    className: "itemPage__container"
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "itemPage__container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexGrow: "1"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-img-border"
  }), /*#__PURE__*/React.createElement("img", {
    className: "itemPage__details-img",
    src: "/images/eating/" + item.ID + ".jpg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__rating    shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__rating-triangle",
    style: triangleStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__rating-number"
  }, ratingModified)))), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__title"
  }, /*#__PURE__*/React.createElement("h1", null, item.title)), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-category"
  }, "Category:"), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-value"
  }, item.category), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-category"
  }, "Rating:"), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-value"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundColor: colorForRating
    }
  }, textForRating)))));
}