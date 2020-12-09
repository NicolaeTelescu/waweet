'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = Category;

function Category(_ref) {
  var handleChange = _ref.handleChange,
      item = _ref.item,
      errors = _ref.errors;
  var categories = params.categories.map(function (category, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: category.name
    }, category.name);
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-category"
  }, /*#__PURE__*/React.createElement("span", null, "Category:"), /*#__PURE__*/React.createElement("span", {
    className: "itemPage__details-text-value-error"
  }, errors.categoryError ? errors.categoryError.msg : null)), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-value"
  }, /*#__PURE__*/React.createElement("select", {
    className: "custom-select",
    name: "category",
    value: item.category,
    onChange: handleChange
  }, /*#__PURE__*/React.createElement("option", {
    defaultValue: true
  }, "- Set the category -"), categories)));
}