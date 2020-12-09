'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchItemsToShow = fetchItemsToShow;
exports.changeURLPageReset = changeURLPageReset;
exports.changeURL = changeURL;
exports.getStateSearchParams = getStateSearchParams;

var _searchActions = require("../../../redux/actions/searchActions.js");

var _SearchItem = require("../layout/SearchItem/SearchItem.js");

var useSelector = ReactRedux.useSelector;

function fetchItemsToShow(setItems, useDispatch) {
  var _getParamsURL = getParamsURL(),
      pageURL = _getParamsURL.pageURL,
      searchURL = _getParamsURL.searchURL,
      categoryURL = _getParamsURL.categoryURL;

  setParamsToState({
    page: pageURL,
    search: searchURL,
    category: categoryURL
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

function getParamsURL() {
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

function setParamsToState(_ref, useDispatch) {
  var page = _ref.page,
      search = _ref.search,
      category = _ref.category;
  useDispatch((0, _searchActions.setSearchField)({
    type: 'PAGE',
    payload: page
  }));
  useDispatch((0, _searchActions.setSearchField)({
    type: 'SEARCH',
    payload: search
  }));
  useDispatch((0, _searchActions.setSearchField)({
    type: 'CATEGORY',
    payload: category
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

function getStateSearchParams() {
  return {
    page: useSelector(function (state) {
      return state.search.page;
    }),
    search: useSelector(function (state) {
      return state.search.search;
    }),
    category: useSelector(function (state) {
      return state.search.category;
    })
  };
}