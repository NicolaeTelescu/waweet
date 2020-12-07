'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddItemButton = AddItemButton;

function AddItemButton(props) {
  return /*#__PURE__*/React.createElement("a", {
    className: "showItems__button",
    href: "/items/add"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "2em",
    height: "2em",
    viewBox: "0 0 16 16",
    className: "bi bi-plus",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
  })));
}