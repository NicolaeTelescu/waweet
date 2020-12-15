'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterDayPeriod = FooterDayPeriod;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _helpers = require("./helpers.js");

var useState = React.useState;
var useEffect = React.useEffect;

function FooterDayPeriod(props) {
  var _useState = useState(new Date()),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var dayPeriod = (0, _helpers.getDayPeriod)(date.getHours());
  useEffect(function () {
    return (0, _helpers.updatingDate)(date, setDate, _helpers.updateHourTime);
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "20px"
    }
  }, " ", dayPeriod, " Time ");
}