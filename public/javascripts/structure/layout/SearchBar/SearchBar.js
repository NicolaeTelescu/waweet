'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = SearchBar;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _FilterButton = require("./FilterButton.js");

var _ButtonsSVG = require("./ButtonsSVG.js");

var _helpers = require("./helpers.js");

var useState = React.useState;
var useSelector = ReactRedux.useSelector;

function SearchBar(props) {
  var _useState = useState((0, _helpers.initStateSearchBar)()),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      searchBar = _useState2[0],
      setSearchBar = _useState2[1];

  var useDispatch = ReactRedux.useDispatch();
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__searchingBar"
  }, /*#__PURE__*/React.createElement(_ButtonsSVG.AddItemButton, null), /*#__PURE__*/React.createElement("div", {
    className: "showItems__searchFields"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "search",
    className: "form-control col-3",
    placeholder: "Search for something",
    value: searchBar.search,
    onChange: function onChange(e) {
      return (0, _helpers.handleChange)(e, searchBar, setSearchBar);
    },
    onKeyDown: function onKeyDown(e) {
      return (0, _helpers.onKeyDown)(e, searchBar, useDispatch);
    }
  }), /*#__PURE__*/React.createElement(_ButtonsSVG.SearchButton, {
    onClick: function onClick(e) {
      return (0, _helpers.handleSubmit)(e, searchBar, useDispatch);
    }
  }), /*#__PURE__*/React.createElement(_FilterButton.FilterButton, {
    categoryChecked: searchBar.category,
    onChange: function onChange(e) {
      return (0, _helpers.handleChange)(e, searchBar, setSearchBar);
    }
  })));
}