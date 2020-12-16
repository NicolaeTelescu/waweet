'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendForm = sendForm;
exports.getItemFetch = getItemFetch;
exports.getFetchCategories = getFetchCategories;
exports.handleChange = handleChange;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getFetchErrors(fetchErrors) {
  if (fetchErrors) {
    return {
      imageError: fetchErrors.find(function (element) {
        return element.param === 'image-validation';
      }),
      titleError: fetchErrors.find(function (element) {
        return element.param === 'title';
      }),
      categoryError: fetchErrors.find(function (element) {
        return element.param === 'category';
      })
    };
  }

  return {};
}

function sendForm(type, setErrors) {
  var formData = new FormData(document.getElementById("itemForm"));
  fetch('http://www.localhost:3000/items/' + type, {
    method: 'POST',
    credentials: 'include',
    body: formData
  }).then(function (response) {
    if (!response.ok) {
      response.text().then(function (text) {
        var errors = getFetchErrors(JSON.parse(text));
        setErrors(errors);
      });
    } else {
      setErrors({});
      window.location.href = 'http://www.localhost:3000/items?receivedMessage=yes';
    }
  })["catch"](function (err) {
    return console.error('Error: ', err);
  });
}

function getItemSlug() {
  return window.location.href.split('/').pop();
}

function getItemFetch(setItem) {
  var itemSlug = getItemSlug();
  fetch('http://www.localhost:3000/item/' + itemSlug).then(function (response) {
    if (!response.ok) {
      throw new Error('Something bad happened');
    } else return response.json();
  }).then(function (result) {
    return setItem(result);
  })["catch"](function (err) {
    return console.log(err);
  });
}

function getFetchCategories(setCategories) {
  fetch('http://www.localhost:3000/categories/all').then(function (response) {
    return response.json();
  }).then(function (categories) {
    return setCategories(categories);
  });
}

function handleChange(event, entity, setEntity) {
  setEntity(_objectSpread(_objectSpread({}, entity), {}, (0, _defineProperty2["default"])({}, event.target.name, event.target.value)));
}