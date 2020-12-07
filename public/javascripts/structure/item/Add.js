'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddItemPage = AddItemPage;

var _ContainerImage = require("./layout/ContainerImage.js");

var _ContainerText = require("./layout/ContainerText.js");

var useEffect = React.useEffect;

function AddItemPage(props) {
  var errors = {};

  if (params.errors) {
    errors = {
      imageError: params.errors.find(function (element) {
        return element.param === 'image-validation';
      }),
      titleError: params.errors.find(function (element) {
        return element.param === 'title';
      }),
      categoryError: params.errors.find(function (element) {
        return element.param === 'category';
      })
    };
  }

  params.image = '';
  return /*#__PURE__*/React.createElement("form", {
    className: "itemPage__container",
    id: "itemForm",
    action: "/items/add",
    method: "post",
    encType: "multipart/form-data",
    runat: "server"
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details"
  }, /*#__PURE__*/React.createElement(_ContainerImage.ContainerImage, {
    errors: errors
  }), /*#__PURE__*/React.createElement(_ContainerText.ContainerText, {
    errors: errors
  })));
}