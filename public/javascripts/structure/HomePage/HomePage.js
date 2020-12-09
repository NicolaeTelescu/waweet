'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = HomePage;

var _Title = require("./Title.js");

var _Categories = require("./Categories.js");

function HomePage(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "home__container"
  }, /*#__PURE__*/React.createElement(_Title.Title, null), /*#__PURE__*/React.createElement(_Categories.Categories, null));
}