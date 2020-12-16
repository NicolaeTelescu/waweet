'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerText = ContainerText;

var _Title = require("./Title.js");

var _Category = require("./Category.js");

var _Rating = require("./Rating.js");

var _ButtonsSVG = require("./ButtonsSVG.js");

function ContainerText(_ref) {
  var item = _ref.item,
      errors = _ref.errors,
      handleChange = _ref.handleChange,
      sendForm = _ref.sendForm;
  return /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text"
  }, /*#__PURE__*/React.createElement(_Title.Title, {
    item: item,
    handleChange: handleChange,
    errors: errors
  }), /*#__PURE__*/React.createElement(_Category.Category, {
    item: item,
    handleChange: handleChange,
    errors: errors
  }), /*#__PURE__*/React.createElement(_Rating.Rating, {
    item: item
  }), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__buttons"
  }, /*#__PURE__*/React.createElement(_ButtonsSVG.AcceptButton, {
    sendForm: sendForm
  }), /*#__PURE__*/React.createElement(_ButtonsSVG.RejectButton, null)));
}