'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = Message;

function Message(props) {
  var message = '';
  var className = '';

  if (params.success) {
    message = params.success;
    className = 'success';
  }
  /*
  else if(params.errors) {
  	message = params.errors.map((item, index) => 
  		<span key={index}>{item.msg}</span>
  	);
  	className = 'danger';
  }
  */
  else return null;

  setTimeout(function () {
    $('.alert').alert('close');
  }, 5000);
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__message alert alert-" + className + " fade show",
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
  }, /*#__PURE__*/React.createElement(RejectButton, null))));
}

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