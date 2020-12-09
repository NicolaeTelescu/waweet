'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = Message;

var _helpers = require("./helpers.js");

function Message(props) {
  var _getMessage = (0, _helpers.getMessage)(),
      message = _getMessage.message,
      className = _getMessage.className;

  if (!message) return null;
  (0, _helpers.closeMessageTimeout)();
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__message alert alert-" + className + " fade show",
    role: "alert"
  }, /*#__PURE__*/React.createElement("span", null, message), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    style: {
      marginLeft: "20px"
    },
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(_helpers.RejectButton, null))));
}