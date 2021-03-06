'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AcceptButton = AcceptButton;
exports.RejectButton = RejectButton;

var _helpers = require("./../../Methods/helpers.js");

function AcceptButton(_ref) {
  var sendForm = _ref.sendForm;
  return /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      return sendForm();
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "itemPage__button__accept bi bi-check2",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
  })));
}

function RejectButton(props) {
  return /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      return window.history.back();
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "itemPage__button__reject bi bi-x",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
  })));
}