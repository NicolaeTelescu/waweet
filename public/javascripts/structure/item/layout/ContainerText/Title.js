'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = Title;

function Title(_ref) {
  var item = _ref.item,
      handleChange = _ref.handleChange,
      errors = _ref.errors;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-category"
  }, /*#__PURE__*/React.createElement("span", null, "Title:"), /*#__PURE__*/React.createElement("span", {
    className: "itemPage__details-text-value-error"
  }, errors.titleError ? errors.titleError.msg : null)), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-value"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-control",
    name: "title",
    type: "text",
    maxLength: "25",
    onChange: handleChange,
    placeholder: "Product title",
    value: item.title
  })));
}