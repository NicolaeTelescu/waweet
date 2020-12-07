'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowItemsPage = ShowItemsPage;

var _SearchBar = require("../../layout/SearchBar/SearchBar.js");

var _Pagination = require("../../layout/Pagination/Pagination.js");

var _SearchMessage = require("./SearchMessage.js");

var _searchActions = require("../../../redux/actions/searchActions.js");

var _helpers = require("./helpers.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = React.useState;
var useEffect = React.useEffect;
var useSelector = ReactRedux.useSelector;

function ShowItemsPage(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__mainContent"
  }, /*#__PURE__*/React.createElement(_SearchBar.SearchBar, null), /*#__PURE__*/React.createElement(Options, null));
}

function Options(props) {
  var useDispatch = ReactRedux.useDispatch();

  var _useState = useState({
    data: null,
    changeable: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  useEffect(function () {
    return (0, _helpers.fetchItemsToShow)(setItems, useDispatch);
  }, []); // These variables can be modified from another part of the application

  var page = useSelector(function (state) {
    return state.search.page;
  });
  var search = useSelector(function (state) {
    return state.search.search;
  });
  var category = useSelector(function (state) {
    return state.search.category;
  });
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
    className: "showItems__options"
  }, /*#__PURE__*/React.createElement(_SearchMessage.SearchMessage, null), items.data, /*#__PURE__*/React.createElement(_Pagination.Pagination, null));
}