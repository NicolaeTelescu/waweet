'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowItemPage = ShowItemPage;

var _ratingActions = require("../../../redux/actions/ratingActions.js");

var useSelector = ReactRedux.useSelector;
var useDispatch = ReactRedux.useDispatch;

function ShowItemPage(props) {
  var item = params[0];
  var dispatch = useDispatch()((0, _ratingActions.setRating)(item.rating));
  var textForRating = useSelector(function (state) {
    return state.rating.text;
  });
  var colorForRating = useSelector(function (state) {
    return state.rating.color;
  });
  var ratingModified = Math.floor(item.rating / 10) + ',' + item.rating % 10;
  var myStyle = {
    backgroundColor: colorForRating
  };
  var imgDimension = "55vh";
  var triangleStyle = {
    borderRight: "calc(" + imgDimension + "/4) solid " + colorForRating,
    borderTop: "calc(" + imgDimension + "/4) solid " + colorForRating
  };
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
    style: myStyle
  }, textForRating)))));
}