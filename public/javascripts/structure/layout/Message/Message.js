'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = Message;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _helpers = require("./helpers.js");

var useState = React.useState;
var useEffect = React.useEffect;

function Message(props) {
  var _useState = useState(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  useEffect(function () {
    return (0, _helpers.fetchMessage)(setMessage);
  }, []);
  if (!message) return null;
  (0, _helpers.closeMessageTimeout)();
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__message alert alert-success fade show",
    role: "alert"
  }, /*#__PURE__*/React.createElement("span", null, message), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    style: {
      marginLeft: "20px"
    },
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(_helpers.RejectButton, null))));
}