"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allReducers = void 0;

var _ratingReducer = _interopRequireDefault(require("./ratingReducer.js"));

var _searchReducer = _interopRequireDefault(require("./searchReducer.js"));

var allReducers = Redux.combineReducers({
  rating: _ratingReducer["default"],
  search: _searchReducer["default"]
});
exports.allReducers = allReducers;