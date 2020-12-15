'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterTime = FooterTime;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _helpers = require("./helpers.js");

var useState = React.useState;
var useEffect = React.useEffect;

function FooterTime(props) {
  var _useState = useState(new Date()),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var _getFooterDate = (0, _helpers.getFooterDate)(date),
      hours = _getFooterDate.hours,
      minutes = _getFooterDate.minutes,
      partOfTheDay = _getFooterDate.partOfTheDay,
      day = _getFooterDate.day,
      dayNumber = _getFooterDate.dayNumber,
      month = _getFooterDate.month,
      year = _getFooterDate.year;

  useEffect(function () {
    return (0, _helpers.updatingDate)(date, setDate, _helpers.updateMinuteTime);
  });
  return /*#__PURE__*/React.createElement("div", null, hours, ":", minutes, " ", partOfTheDay, " - ", day, " ", dayNumber, ", ", month, " ", year);
}