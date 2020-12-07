'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchItemsToShow = fetchItemsToShow;
exports.changeURLPageReset = changeURLPageReset;
exports.changeURL = changeURL;

var _searchActions = require("../../../redux/actions/searchActions.js");

var _SearchItem = require("../layout/SearchItem.js");

function fetchItemsToShow(setItems, useDispatch) {
  var _getParametersURL = getParametersURL(),
      pageURL = _getParametersURL.pageURL,
      searchURL = _getParametersURL.searchURL,
      categoryURL = _getParametersURL.categoryURL;

  setURLParametersToState({
    pageURL: pageURL,
    searchURL: searchURL,
    categoryURL: categoryURL
  }, useDispatch);
  fetch("http://www.localhost:3000/items/all?search=".concat(searchURL, "&category=").concat(categoryURL, "&page=").concat(pageURL)).then(function (response) {
    return response.json();
  }).then(function (data) {
    useDispatch((0, _searchActions.setSearchField)({
      type: 'TOTAL_ELEMENTS',
      payload: data.totalElements
    }));
    var itemsToShow = data.items.map(function (el, index) {
      return /*#__PURE__*/React.createElement(_SearchItem.Item, {
        key: index,
        props: el
      });
    }); // From now, if some variables change, you can change the page

    setItems({
      data: itemsToShow,
      changeable: true
    });
  });
}

function getParametersURL() {
  var url = new URL(window.location.href);
  var pageURL = url.searchParams.get('page') ? Number(url.searchParams.get('page')) : 1;
  var searchURL = url.searchParams.get('search') ? url.searchParams.get('search') : '';
  var categoryURL = url.searchParams.get('category') ? url.searchParams.get('category') : '';
  return {
    pageURL: pageURL,
    searchURL: searchURL,
    categoryURL: categoryURL
  };
}

function setURLParametersToState(_ref, useDispatch) {
  var pageURL = _ref.pageURL,
      searchURL = _ref.searchURL,
      categoryURL = _ref.categoryURL;
  useDispatch((0, _searchActions.setSearchField)({
    type: 'PAGE',
    payload: pageURL
  }));
  useDispatch((0, _searchActions.setSearchField)({
    type: 'SEARCH',
    payload: searchURL
  }));
  useDispatch((0, _searchActions.setSearchField)({
    type: 'CATEGORY',
    payload: categoryURL
  }));
}

function changeURLPageReset(changeable, _ref2) {
  var search = _ref2.search,
      category = _ref2.category;
  if (changeable) window.location.href = "http://www.localhost:3000/items?search=".concat(search, "&category=").concat(category);
}

function changeURL(changeable, _ref3) {
  var search = _ref3.search,
      category = _ref3.category,
      page = _ref3.page;
  if (changeable) window.location.href = "http://www.localhost:3000/items?search=".concat(search, "&category=").concat(category, "&page=").concat(page);
}