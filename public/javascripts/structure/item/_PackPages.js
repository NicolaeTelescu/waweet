"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PackItemPages = PackItemPages;

var _Show = require("./Methods/Show.js");

var _Add = require("./Methods/Add.js");

var _Edit = require("./Methods/Edit.js");

var _ShowAll = require("./ShowAll/ShowAll.js");

var Switch = ReactRouterDOM.Switch;
var Route = ReactRouterDOM.Route;

function PackItemPages(props) {
  var _ReactRouterDOM$useRo = ReactRouterDOM.useRouteMatch(),
      path = _ReactRouterDOM$useRo.path;

  return /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    path: path + "/",
    exact: true,
    component: _ShowAll.ShowItemsPage
  }), /*#__PURE__*/React.createElement(Route, {
    path: path + "/add",
    component: _Add.AddItemPage
  }), /*#__PURE__*/React.createElement(Route, {
    path: path + "/show/:itemID",
    component: _Show.ShowItemPage
  }), /*#__PURE__*/React.createElement(Route, {
    path: path + "/edit/:itemID",
    component: _Edit.EditItemPage
  }));
}