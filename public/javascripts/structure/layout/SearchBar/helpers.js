'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStateSearchBar = initStateSearchBar;
exports.handleChange = handleChange;
exports.handleSubmit = handleSubmit;
exports.onKeyDown = onKeyDown;

var _searchActions = require("../../../redux/actions/searchActions.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function initStateSearchBar() {
  var url = new URL(window.location.href);
  var searchURL = url.searchParams.get('search') ? url.searchParams.get('search') : '';
  var categoryURL = url.searchParams.get('category') ? url.searchParams.get('category') : '';
  var initialState = {
    search: searchURL,
    category: categoryURL
  };
  return initialState;
}

function handleChange(event, entity, setEntity) {
  setEntity(_objectSpread(_objectSpread({}, entity), {}, _defineProperty({}, event.target.name, event.target.value)));
}

function handleSubmit(event, searchBar, useDispatch) {
  useDispatch((0, _searchActions.setSearchField)({
    type: 'SEARCH',
    payload: searchBar.search
  }));
  useDispatch((0, _searchActions.setSearchField)({
    type: 'CATEGORY',
    payload: searchBar.category
  }));
}

function onKeyDown(event, searchBar, useDispatch) {
  if (event.key === 'Enter') {
    handleSubmit(event, searchBar, useDispatch);
  }
}