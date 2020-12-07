"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  rating: 0,
  color: "#bfbfbf",
  text: "I don't know"
};

var ratingReducer = function ratingReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var ratings = ['Disgusting', 'Very bad', 'Not good at all', 'I prefer something else', 'So and so', 'It could be better', 'Acceptable', 'Good', 'Delicious', 'Very tasty', 'Perfect'];
  var ratingColors = ["#7a0000", "#a30000", "#e00000", "#ff5e00", "#ff9900", "#fff200", "#f6ff00", "#e3fc03", "#c2fc03", "#6fff00", "#00ff22"];

  switch (action.type) {
    case 'SET':
      var ratingCategory = Math.floor(action.rating / 10);
      return {
        rating: action.rating,
        color: ratingColors[ratingCategory],
        text: ratings[ratingCategory]
      };

    default:
      return state;
  }
};

var _default = ratingReducer;
exports["default"] = _default;