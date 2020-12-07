'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangePageButtonSVG = ChangePageButtonSVG;

function ChangePageButtonSVG(_ref) {
  var direction = _ref.direction;
  if (direction == 'left') return /*#__PURE__*/React.createElement("svg", {
    width: "0.5em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-chevron-left",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
  }));
  if (direction == 'right') return /*#__PURE__*/React.createElement("svg", {
    width: "0.5em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-chevron-right",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
  }));
  if (direction == 'begin') return /*#__PURE__*/React.createElement("svg", {
    width: "0.5em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-chevron-double-left",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
  }));
  if (direction == 'end') return /*#__PURE__*/React.createElement("svg", {
    width: "0.5em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-chevron-double-right",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
  }));
}