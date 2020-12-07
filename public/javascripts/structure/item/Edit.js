'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditItemPage = EditItemPage;

var _ContainerImage = require("./layout/ContainerImage.js");

var _ContainerText = require("./layout/ContainerText.js");

var useEffect = React.useEffect;

function EditItemPage(props) {
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

  params.image = '/images/eating/' + params.form.ID + '.jpg';
  return /*#__PURE__*/React.createElement("form", {
    className: "itemPage__container",
    id: "itemForm",
    action: "/items/edit/" + params.form.slug,
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