'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleChangeRating = handleChangeRating;
exports.setRatingItem = setRatingItem;

var _ratingActions = require("../../../../redux/actions/ratingActions.js");

function handleChangeRating(event, useDispatch) {
  useDispatch((0, _ratingActions.setRating)(event.target.value));
}

;

function setRatingItem(item, useDispatch) {
  if (item.rating) useDispatch((0, _ratingActions.setRating)(item.rating));
}