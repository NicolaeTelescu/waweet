'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrors = getErrors;

function getErrors() {
  if (params.errors) {
    return {
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

  return {};
}