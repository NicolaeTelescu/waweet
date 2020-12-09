'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageFile = ImageFile;

var _helpers = require("./helpers.js");

function ImageFile(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    onChange: handleChangeImage,
    type: "file",
    id: "image",
    name: "image",
    hidden: true
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "image-validation",
    name: "image-validation",
    defaultValue: "false",
    hidden: true
  }));
}

function handleChangeImage(event) {
  (0, _helpers.readURL)(event.target);
  document.getElementById("image-validation").value = "true";
  document.getElementsByClassName("itemPage__img-error")[0].style.display = "none";
  document.getElementsByClassName("bi-file-earmark-image")[0].style.display = "none";
}