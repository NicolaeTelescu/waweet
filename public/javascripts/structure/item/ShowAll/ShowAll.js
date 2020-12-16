'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowItemsPage = ShowItemsPage;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _SearchBar = require("../../layout/SearchBar/SearchBar.js");

var _Pagination = require("../../layout/Pagination/Pagination.js");

var _SearchMessage = require("./SearchMessage.js");

var _searchActions = require("../../../redux/actions/searchActions.js");

var _helpers = require("./helpers.js");

var useState = React.useState;
var useEffect = React.useEffect;

function ShowItemsPage(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__mainContent"
  }, /*#__PURE__*/React.createElement(_SearchBar.SearchBar, null), /*#__PURE__*/React.createElement(Items, null));
}

function Items(props) {
  var useDispatch = ReactRedux.useDispatch();

  var _useState = useState({
    data: null,
    changeable: false
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  useEffect(function () {
    return (0, _helpers.fetchItemsToShow)(setItems, useDispatch);
  }, []); // These variables can be modified from another part of the application

  var _getStateSearchParams = (0, _helpers.getStateSearchParams)(),
      page = _getStateSearchParams.page,
      search = _getStateSearchParams.search,
      category = _getStateSearchParams.category;

  useEffect(function () {
    return (0, _helpers.changeURLPageReset)(items.changeable, {
      search: search,
      category: category
    });
  }, [search, category]);
  useEffect(function () {
    return (0, _helpers.changeURL)(items.changeable, {
      search: search,
      category: category,
      page: page
    });
  }, [page]);
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__items"
  }, /*#__PURE__*/React.createElement(_SearchMessage.SearchMessage, null), items.data, /*#__PURE__*/React.createElement(_Pagination.Pagination, null));
}