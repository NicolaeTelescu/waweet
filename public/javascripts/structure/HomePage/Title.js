'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = Title;

function Title(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "home__title"
  }, /*#__PURE__*/React.createElement("h1", null, "What are we eating ", /*#__PURE__*/React.createElement("span", {
    className: "showItems__todayTitle",
    style: {
      color: "red"
    }
  }, "today"), "?"));
}