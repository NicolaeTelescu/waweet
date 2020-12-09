'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = Footer;

var _FooterDayPeriod = require("./FooterDayPeriod.js");

var _FooterTime = require("./FooterTime.js");

function Footer(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/React.createElement(_FooterDayPeriod.FooterDayPeriod, null), /*#__PURE__*/React.createElement(_FooterTime.FooterTime, null));
}