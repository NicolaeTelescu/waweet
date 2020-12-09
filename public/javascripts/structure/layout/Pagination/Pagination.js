'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = Pagination;

var _ChangePageButton = require("./ChangePageButton.js");

var _NumberButtons = require("./NumberButtons.js");

var _helpers = require("./helpers.js");

function Pagination(props) {
  var useDispatch = ReactRedux.useDispatch();

  var _getPaginationParams = (0, _helpers.getPaginationParams)(),
      page = _getPaginationParams.page,
      limit = _getPaginationParams.limit,
      totalElements = _getPaginationParams.totalElements,
      totalPages = _getPaginationParams.totalPages;

  var _getBoundaryPages = (0, _helpers.getBoundaryPages)(page, totalPages),
      firstPage = _getBoundaryPages.firstPage,
      lastPage = _getBoundaryPages.lastPage,
      betweenPages = _getBoundaryPages.betweenPages;

  if (totalPages == 0) return null;
  return /*#__PURE__*/React.createElement("nav", {
    className: "showItems__pagination-nav"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "pagination"
  }, /*#__PURE__*/React.createElement(_ChangePageButton.ChangePageButton, {
    direction: "begin",
    inactiveButtonPage: firstPage,
    changePage: function changePage() {
      return (0, _helpers.goToPage)(1, useDispatch);
    }
  }), /*#__PURE__*/React.createElement(_ChangePageButton.ChangePageButton, {
    direction: "left",
    inactiveButtonPage: firstPage,
    changePage: function changePage() {
      return (0, _helpers.goToPage)(page - 1, useDispatch);
    }
  }), /*#__PURE__*/React.createElement(_NumberButtons.NumberButtons, {
    page: page,
    totalPages: totalPages,
    useDispatch: useDispatch
  }), /*#__PURE__*/React.createElement(_ChangePageButton.ChangePageButton, {
    direction: "right",
    inactiveButtonPage: lastPage,
    changePage: function changePage() {
      return (0, _helpers.goToPage)(page + 1, useDispatch);
    }
  }), /*#__PURE__*/React.createElement(_ChangePageButton.ChangePageButton, {
    direction: "end",
    inactiveButtonPage: lastPage,
    changePage: function changePage() {
      return (0, _helpers.goToPage)(totalPages, useDispatch);
    }
  })));
}