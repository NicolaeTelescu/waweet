'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPaginationParams = getPaginationParams;
exports.getBoundaryPages = getBoundaryPages;
exports.getLabels = getLabels;
exports.goToPage = goToPage;

var _searchActions = require("../../../redux/actions/searchActions.js");

var useSelector = ReactRedux.useSelector;

function getPaginationParams() {
  var page = useSelector(function (state) {
    return state.search.page;
  });
  var limit = useSelector(function (state) {
    return state.search.limit;
  });
  var totalElements = useSelector(function (state) {
    return state.search.totalElements;
  });
  var totalPages = Math.ceil(totalElements / limit);
  return {
    page: page,
    limit: limit,
    totalElements: totalElements,
    totalPages: totalPages
  };
}

function getBoundaryPages(page, totalPages) {
  var firstPage = page == 1 ? true : false;
  var lastPage = page == totalPages ? true : false;
  var betweenPages = firstPage || lastPage ? false : true;
  return {
    firstPage: firstPage,
    lastPage: lastPage,
    betweenPages: betweenPages
  };
}

function getLabels(page, totalPages) {
  var labels = [];

  var _getBoundaryPages = getBoundaryPages(page, totalPages),
      firstPage = _getBoundaryPages.firstPage,
      lastPage = _getBoundaryPages.lastPage,
      betweenPages = _getBoundaryPages.betweenPages;

  if (totalPages < 3) {
    for (var i = 1; i <= totalPages; i++) {
      labels.push(i);
    }
  } else if (firstPage) labels = [1, 2, 3];else if (lastPage) labels = [totalPages - 2, totalPages - 1, totalPages];else if (betweenPages) labels = [page - 1, page, page + 1];

  return labels;
}

function goToPage(page, useDispatch) {
  useDispatch((0, _searchActions.setSearchField)({
    type: 'PAGE',
    payload: page
  }));
}