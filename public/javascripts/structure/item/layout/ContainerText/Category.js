'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = Category;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _helpers = require("./../../Methods/helpers.js");

var useState = React.useState;
var useEffect = React.useEffect;

function Category(_ref) {
  var handleChange = _ref.handleChange,
      item = _ref.item,
      errors = _ref.errors;

  var _useState = useState([]),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      categories = _useState2[0],
      setCategories = _useState2[1];

  useEffect(function () {
    return (0, _helpers.getFetchCategories)(setCategories);
  }, []);
  var categoryOptions = categories.map(function (category, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: category.name
    }, category.name);
  });
  if (categories.length === 0) return null;
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
  }, "- Set the category -"), categoryOptions)));
}