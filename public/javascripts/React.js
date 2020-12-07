'use strict';

var _Header = require("./structure/layout/Header.js");

var _Footer = require("./structure/layout/Footer.js");

var _Message = require("./structure/layout/Message.js");

var _HomePage = require("./structure/HomePage.js");

var _PackPages = require("./structure/item/_PackPages.js");

var _index = require("./redux/reducers/index.js");

var Provider = ReactRedux.Provider;
var Router = ReactRouterDOM.BrowserRouter;
var Switch = ReactRouterDOM.Switch;
var Route = ReactRouterDOM.Route;

function App(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-container"
  }, /*#__PURE__*/React.createElement(_Header.Header, null), /*#__PURE__*/React.createElement(_Message.Message, null), /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    exact: true,
    component: _HomePage.HomePage
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/items",
    component: _PackPages.PackItemPages
  })), /*#__PURE__*/React.createElement(_Footer.Footer, null));
} // Create store


var store = Redux.createStore(_index.allReducers);
var domContainer = document.querySelector('#react_container');
ReactDOM.render( /*#__PURE__*/React.createElement(Provider, {
  store: store
}, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(App, null))), domContainer);