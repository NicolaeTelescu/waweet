'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerText = ContainerText;

var _ratingActions = require("../../../redux/actions/ratingActions.js");

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useSelector = ReactRedux.useSelector;
var useState = React.useState;
var useEffect = React.useEffect;

function ContainerText(_ref) {
  var errors = _ref.errors;

  var _useState = useState({
    title: params.form ? params.form.title : "",
    category: params.form ? params.form.category : "Set the category"
  }),
      _useState2 = _slicedToArray(_useState, 2),
      item = _useState2[0],
      setItem = _useState2[1];

  var handleInputChange = function handleInputChange(event) {
    var name = event.target.name;
    var newItem = Object.assign({}, item);
    newItem[name] = event.target.value;
    setItem(newItem);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text"
  }, /*#__PURE__*/React.createElement(Title, {
    item: item,
    handleInputChange: handleInputChange,
    errors: errors
  }), /*#__PURE__*/React.createElement(Category, {
    handleInputChange: handleInputChange,
    item: item,
    errors: errors
  }), /*#__PURE__*/React.createElement(Rating, null), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__buttons"
  }, /*#__PURE__*/React.createElement(AcceptButton, null), /*#__PURE__*/React.createElement(RejectButton, null)));
}

function Title(_ref2) {
  var item = _ref2.item,
      handleInputChange = _ref2.handleInputChange,
      errors = _ref2.errors;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-category"
  }, /*#__PURE__*/React.createElement("span", null, "Title:"), /*#__PURE__*/React.createElement("span", {
    className: "itemPage__details-text-value-error"
  }, errors.titleError ? errors.titleError.msg : null)), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-value"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-control",
    name: "title",
    type: "text",
    maxLength: "25",
    onChange: handleInputChange,
    placeholder: "Product title",
    value: item.title
  })));
}

function Category(_ref3) {
  var handleInputChange = _ref3.handleInputChange,
      item = _ref3.item,
      errors = _ref3.errors;
  var categories = params.categories.map(function (category, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: category.name
    }, category.name);
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-category"
  }, /*#__PURE__*/React.createElement("span", null, "Category:"), /*#__PURE__*/React.createElement("span", {
    className: "itemPage__details-text-value-error"
  }, errors.categoryError ? errors.categoryError.msg : null)), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-value"
  }, /*#__PURE__*/React.createElement("select", {
    className: "custom-select",
    name: "category",
    value: item.category,
    onChange: handleInputChange
  }, /*#__PURE__*/React.createElement("option", {
    defaultValue: true
  }, "- Set the category -"), categories)));
}

function Rating(_ref4) {
  _objectDestructuringEmpty(_ref4);

  var useDispatch = ReactRedux.useDispatch();
  var rating = useSelector(function (state) {
    return state.rating.rating;
  });
  var textForRating = useSelector(function (state) {
    return state.rating.text;
  });
  var colorForRating = useSelector(function (state) {
    return state.rating.color;
  });
  var myStyle = {
    backgroundColor: colorForRating
  };

  var handleChangeRating = function handleChangeRating(event) {
    useDispatch((0, _ratingActions.setRating)(event.target.value));
  };

  useEffect(function () {
    if (params.form) useDispatch((0, _ratingActions.setRating)(params.form.rating));
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-category"
  }, "Rating:"), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-value"
  }, /*#__PURE__*/React.createElement("span", {
    style: myStyle
  }, textForRating)), /*#__PURE__*/React.createElement("input", {
    className: "itemPage__range custom-range",
    name: "rating",
    type: "range",
    onChange: handleChangeRating,
    min: "0",
    max: "100",
    value: rating
  }));
}

function AcceptButton(props) {
  return /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      document.getElementById("itemForm").submit();
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "itemPage__button__accept bi bi-check2",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
  })));
}

function RejectButton(props) {
  return /*#__PURE__*/React.createElement("a", {
    href: "/"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "itemPage__button__reject bi bi-x",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
  })));
}