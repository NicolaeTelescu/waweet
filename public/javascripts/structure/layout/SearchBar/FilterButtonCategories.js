'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterButtonCategories = FilterButtonCategories;

function FilterButtonCategories(_ref) {
  var categoryChecked = _ref.categoryChecked,
      onChange = _ref.onChange;
  if (!categoryChecked) categoryChecked = 'All categories';
  var categories = ['All categories', 'Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Snack'].map(function (el, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "dropdown-item",
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-check form-check-inline"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-check-input",
      type: "radio",
      name: "category",
      id: 'categoryOption' + index,
      onChange: onChange,
      value: el !== 'All categories' ? el : '',
      defaultChecked: el === categoryChecked ? true : false
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        fontSize: "14px"
      },
      className: "form-check-label",
      htmlFor: 'categoryOption' + index
    }, el)));
  });
  return /*#__PURE__*/React.createElement("div", null, categories);
}