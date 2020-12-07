"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSearchField = void 0;

var setSearchField = function setSearchField(_ref) {
  var type = _ref.type,
      payload = _ref.payload;
  return {
    type: type,
    payload: payload
  };
};

exports.setSearchField = setSearchField;