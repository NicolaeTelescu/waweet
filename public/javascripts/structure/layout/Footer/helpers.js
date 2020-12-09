'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDayPeriod = getDayPeriod;
exports.updatingDate = updatingDate;
exports.updateHourTime = updateHourTime;
exports.updateMinuteTime = updateMinuteTime;
exports.getFooterDate = getFooterDate;

function getDayPeriod(hour) {
  var dayPeriod = "Snack";
  if (hour >= 7 && hour < 11) dayPeriod = "Breakfast";
  if (hour >= 12 && hour < 15) dayPeriod = "Lunch";
  if (hour >= 17 && hour < 20) dayPeriod = "Dinner";
  return dayPeriod;
}

function updatingDate(date, setDate, timeUntilUpdate) {
  setTimeout(function () {
    setDate(new Date());
  }, timeUntilUpdate(date));
}

function updateHourTime(date) {
  return (60 - date.getMinutes() - 1) * 60000 + (60 - date.getSeconds()) * 1000;
}

function updateMinuteTime(date) {
  return (60 - date.getSeconds()) * 1000;
}

function getFooterDate(date) {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var year = date.getFullYear();
  var month = date.getMonth();
  var dayNumber = date.getDate();
  var day = date.getDay();
  var hours = date.getHours();
  var minutes = date.getMinutes(); // Setting the time accordingly

  var partOfTheDay = "AM";

  if (hours == 0) {
    hours = 12;
  } else if (hours == 12) {
    partOfTheDay = "PM";
  } else if (hours > 12) {
    hours -= 12;
    partOfTheDay = "PM";
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return {
    hours: hours,
    minutes: minutes,
    partOfTheDay: partOfTheDay,
    day: days[day],
    dayNumber: dayNumber,
    month: months[month],
    year: year
  };
}