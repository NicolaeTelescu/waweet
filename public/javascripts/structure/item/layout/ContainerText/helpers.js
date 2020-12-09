'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleChangeRating = handleChangeRating;
exports.setFormParams = setFormParams;
exports.handleChange = handleChange;
exports.initialItemState = initialItemState;

var _ratingActions = require("../../../../redux/actions/ratingActions.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function handleChangeRating(event, useDispatch) {
  useDispatch((0, _ratingActions.setRating)(event.target.value));
}

;

function setFormParams(useDispatch) {
  if (params.form) useDispatch((0, _ratingActions.setRating)(params.form.rating));
}

function handleChange(event, entity, setEntity) {
  setEntity(_objectSpread(_objectSpread({}, entity), {}, _defineProperty({}, event.target.name, event.target.value)));
}

function initialItemState() {
  return {
    title: params.form ? params.form.title : "",
    category: params.form ? params.form.category : "Set the category"
  };
}