'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerImage = ContainerImage;
var useSelector = ReactRedux.useSelector;

function ContainerImage(_ref) {
  var errors = _ref.errors;
  return /*#__PURE__*/React.createElement("div", {
    className: "itemPage__container-img"
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-img-border"
  }), /*#__PURE__*/React.createElement("img", {
    className: "itemPage__details-img",
    src: params.image ? params.image : null
  }), /*#__PURE__*/React.createElement(AddImageButton, {
    errors: errors
  }), /*#__PURE__*/React.createElement(ImageError, {
    errors: errors
  }), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__rating    shadow"
  }, /*#__PURE__*/React.createElement(ItemRatingTriangle, null), /*#__PURE__*/React.createElement("label", {
    className: "itemPage__label-image",
    htmlFor: "image"
  })), /*#__PURE__*/React.createElement(ImageInputs, null));
}

function ItemRatingTriangle(props) {
  var imgDimension = "55vh";
  var rating = useSelector(function (state) {
    return state.rating.rating;
  });
  var colorForRating = useSelector(function (state) {
    return state.rating.color;
  });
  var ratingModified = Math.floor(rating / 10) + ',' + rating % 10;
  var triangleStyle = {
    borderRight: "calc(" + imgDimension + "/4) solid " + colorForRating,
    borderTop: "calc(" + imgDimension + "/4) solid " + colorForRating
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "itemPage__rating-triangle",
    style: triangleStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__rating-number"
  }, ratingModified));
}

function ImageError(_ref2) {
  var errors = _ref2.errors;
  return /*#__PURE__*/React.createElement("div", {
    className: "itemPage__img-error"
  }, errors.imageError ? errors.imageError.msg : null);
}

function ImageInputs(props) {
  var handleChangeImage = function handleChangeImage(event) {
    readURL(event.target);
    document.getElementById("image-validation").value = "true";
    document.getElementsByClassName("itemPage__img-error")[0].style.display = "none";
    document.getElementsByClassName("bi-file-earmark-image")[0].style.display = "none";
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    onChange: handleChangeImage,
    type: "file",
    id: "image",
    name: "image",
    hidden: true
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "image-validation",
    name: "image-validation",
    defaultValue: "false",
    hidden: true
  }));
}

function AddImageButton(_ref3) {
  var errors = _ref3.errors;
  var buttonStyle = {
    position: "absolute"
  };

  if (errors.imageError || params.form && params.form.ID) {
    buttonStyle.display = "none";
  }

  return /*#__PURE__*/React.createElement("svg", {
    width: "20%",
    height: "20%",
    viewBox: "0 0 16 16",
    style: buttonStyle,
    className: "bi bi-file-earmark-image",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12 16a2 2 0 0 0 2-2V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8zM3 2a1 1 0 0 1 1-1h5.5v2A1.5 1.5 0 0 0 11 4.5h2V10l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
  }));
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      document.getElementsByClassName("itemPage__details-img")[0].src = reader.result;
    };

    reader.readAsDataURL(input.files[0]); // convert to base64 string -> for browser to be able to show the image
  }
}