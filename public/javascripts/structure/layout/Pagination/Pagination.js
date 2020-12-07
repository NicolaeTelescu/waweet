'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = Pagination;

var _searchActions = require("../../../redux/actions/searchActions.js");

var _ChangePageButton = require("./ChangePageButton.js");

var useSelector = ReactRedux.useSelector;

function Pagination(props) {
  var useDispatch = ReactRedux.useDispatch();
  var labels = [];
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
  if (totalPages == 0) return null;
  var firstPage = page == 1 ? true : false;
  var lastPage = page == totalPages ? true : false;
  var betweenPages = firstPage || lastPage ? false : true;

  if (totalPages < 3) {
    for (var i = 1; i <= totalPages; i++) {
      labels.push(i);
    }
  } else if (firstPage) labels = [1, 2, 3];else if (lastPage) labels = [totalPages - 2, totalPages - 1, totalPages];else if (betweenPages) labels = [page - 1, page, page + 1];

  var buttons = labels.map(function (el, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: "page-item" + (page == labels[index] ? " active" : ''),
      key: index
    }, /*#__PURE__*/React.createElement("a", {
      className: "page-link",
      onClick: function onClick() {
        goToPage(labels[index]);
      }
    }, labels[index]));
  });

  var goToPage = function goToPage(page) {
    useDispatch((0, _searchActions.setSearchField)({
      type: 'PAGE',
      payload: page
    }));
  };

  return /*#__PURE__*/React.createElement("nav", {
    className: "showItems__pagination-nav"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "pagination"
  }, /*#__PURE__*/React.createElement(_ChangePageButton.ChangePageButton, {
    direction: "begin",
    inactivePage: firstPage,
    nextPage: 1,
    goToPage: goToPage
  }), /*#__PURE__*/React.createElement(_ChangePageButton.ChangePageButton, {
    direction: "left",
    inactivePage: firstPage,
    nextPage: page - 1,
    goToPage: goToPage
  }), buttons, /*#__PURE__*/React.createElement(_ChangePageButton.ChangePageButton, {
    direction: "right",
    inactivePage: lastPage,
    nextPage: page + 1,
    goToPage: goToPage
  }), /*#__PURE__*/React.createElement(_ChangePageButton.ChangePageButton, {
    direction: "end",
    inactivePage: lastPage,
    nextPage: totalPages,
    goToPage: goToPage
  })));
}