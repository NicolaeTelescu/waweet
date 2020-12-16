'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerImage = ContainerImage;

var _ItemRatingTriangle = require("./ItemRatingTriangle.js");

var _ImageFile = require("./ImageFile.js");

var _helpers = require("./helpers.js");

function ContainerImage(_ref) {
  var item = _ref.item,
      errors = _ref.errors;
  return /*#__PURE__*/React.createElement("div", {
    className: "itemPage__container-img"
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-img-border"
  }), /*#__PURE__*/React.createElement("img", {
    className: "itemPage__details-img",
    src: item.ID ? '/images/eating/' + item.ID + '.jpg' : null
  }), /*#__PURE__*/React.createElement(_helpers.AddImageButton, {
    item: item,
    errors: errors
  }), /*#__PURE__*/React.createElement(_helpers.ImageError, {
    errors: errors
  }), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__rating    shadow"
  }, /*#__PURE__*/React.createElement(_ItemRatingTriangle.ItemRatingTriangle, null), /*#__PURE__*/React.createElement("label", {
    className: "itemPage__label-image",
    htmlFor: "image"
  })), /*#__PURE__*/React.createElement(_ImageFile.ImageFile, null));
}