'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchMessage = SearchMessage;
var useSelector = ReactRedux.useSelector;

function SearchMessage(props) {
  var search = useSelector(function (state) {
    return state.search.search;
  });
  var totalElements = useSelector(function (state) {
    return state.search.totalElements;
  });
  var searchMessage = search ? "You searched for '".concat(search, "':") : null;
  var noElementFound = totalElements ? null : 'No element found!';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__search-message"
  }, searchMessage), /*#__PURE__*/React.createElement("div", null, noElementFound));
}