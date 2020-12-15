'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddItemPage = AddItemPage;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _ContainerImage = require("../layout/ContainerImage/ContainerImage.js");

var _ContainerText = require("../layout/ContainerText/ContainerText.js");

var _helpers = require("./helpers.js");

var useState = React.useState;
var useEffect = React.useEffect;

function AddItemPage(props) {
  var _useState = useState({
    title: "",
    category: ""
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      item = _useState2[0],
      setItem = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  return /*#__PURE__*/React.createElement("form", {
    className: "itemPage__container",
    id: "itemForm",
    encType: "multipart/form-data"
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details"
  }, /*#__PURE__*/React.createElement(_ContainerImage.ContainerImage, {
    item: item,
    errors: errors
  }), /*#__PURE__*/React.createElement(_ContainerText.ContainerText, {
    item: item,
    errors: errors,
    handleChange: function handleChange(e) {
      return (0, _helpers.handleChange)(e, item, setItem);
    },
    sendForm: function sendForm() {
      return (0, _helpers.sendForm)('add', setErrors);
    }
  })));
}