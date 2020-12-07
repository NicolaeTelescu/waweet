"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  search: '',
  category: '',
  page: 1,
  limit: 5,
  totalElements: 0
};

var searchReducer = function searchReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SEARCH':
      return _objectSpread(_objectSpread({}, state), {}, {
        search: action.payload
      });

    case 'CATEGORY':
      return _objectSpread(_objectSpread({}, state), {}, {
        category: action.payload
      });

    case 'PAGE':
      return _objectSpread(_objectSpread({}, state), {}, {
        page: action.payload
      });

    case 'LIMIT':
      return _objectSpread(_objectSpread({}, state), {}, {
        limit: action.payload
      });

    case 'TOTAL_ELEMENTS':
      return _objectSpread(_objectSpread({}, state), {}, {
        totalElements: action.payload
      });

    default:
      return state;
  }
};

var _default = searchReducer;
exports["default"] = _default;