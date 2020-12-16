'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RejectButton = RejectButton;
exports.closeMessageTimeout = closeMessageTimeout;
exports.fetchMessage = fetchMessage;

function RejectButton(props) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-x",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
  }));
}

function closeMessageTimeout() {
  setTimeout(function () {
    $('.alert').alert('close');
  }, 5000);
}

function fetchMessage(setMessage) {
  if (receivedMessage() === 'yes') {
    fetch('http://www.localhost:3000/serverMessage').then(function (response) {
      return response.text();
    }).then(function (result) {
      return setMessage(result);
    });
  }
}

function receivedMessage() {
  var url = new URL(window.location.href);
  var receivedMessageURL = url.searchParams.get('receivedMessage') ? url.searchParams.get('receivedMessage') : 'no';
  return receivedMessageURL;
}