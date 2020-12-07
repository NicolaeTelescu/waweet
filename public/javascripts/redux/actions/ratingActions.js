"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRating = void 0;

var setRating = function setRating(rating) {
  return {
    type: 'SET',
    rating: rating
  };
};

exports.setRating = setRating;