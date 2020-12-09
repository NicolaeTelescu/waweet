(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _Header = require("./structure/layout/Header/Header.js");

var _Footer = require("./structure/layout/Footer/Footer.js");

var _Message = require("./structure/layout/Message/Message.js");

var _HomePage = require("./structure/HomePage/HomePage.js");

var _PackPages = require("./structure/item/_PackPages.js");

var _index = require("./redux/reducers/index.js");

var Provider = ReactRedux.Provider;
var Router = ReactRouterDOM.BrowserRouter;
var Switch = ReactRouterDOM.Switch;
var Route = ReactRouterDOM.Route;

function App(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-container"
  }, /*#__PURE__*/React.createElement(_Header.Header, null), /*#__PURE__*/React.createElement(_Message.Message, null), /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    exact: true,
    component: _HomePage.HomePage
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/items",
    component: _PackPages.PackItemPages
  })), /*#__PURE__*/React.createElement(_Footer.Footer, null));
} // Create store


var store = Redux.createStore(_index.allReducers);
var domContainer = document.querySelector('#react_container');
ReactDOM.render( /*#__PURE__*/React.createElement(Provider, {
  store: store
}, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(App, null))), domContainer);
},{"./redux/reducers/index.js":4,"./structure/HomePage/HomePage.js":8,"./structure/item/_PackPages.js":17,"./structure/layout/Footer/Footer.js":33,"./structure/layout/Header/Header.js":37,"./structure/layout/Message/Message.js":39}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRating = void 0;

var setRating = function setRating(rating) {
  return {
    type: 'SET',
    rating: rating
  };
};

exports.setRating = setRating;
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSearchField = void 0;

var setSearchField = function setSearchField(_ref) {
  var type = _ref.type,
      payload = _ref.payload;
  return {
    type: type,
    payload: payload
  };
};

exports.setSearchField = setSearchField;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allReducers = void 0;

var _ratingReducer = _interopRequireDefault(require("./ratingReducer.js"));

var _searchReducer = _interopRequireDefault(require("./searchReducer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var allReducers = Redux.combineReducers({
  rating: _ratingReducer["default"],
  search: _searchReducer["default"]
});
exports.allReducers = allReducers;
},{"./ratingReducer.js":5,"./searchReducer.js":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  rating: 0,
  color: "#bfbfbf",
  text: "I don't know"
};

var ratingReducer = function ratingReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var ratings = ['Disgusting', 'Very bad', 'Not good at all', 'I prefer something else', 'So and so', 'It could be better', 'Acceptable', 'Good', 'Delicious', 'Very tasty', 'Perfect'];
  var ratingColors = ["#7a0000", "#a30000", "#e00000", "#ff5e00", "#ff9900", "#fff200", "#f6ff00", "#e3fc03", "#c2fc03", "#6fff00", "#00ff22"];

  switch (action.type) {
    case 'SET':
      var ratingCategory = Math.floor(action.rating / 10);
      return {
        rating: action.rating,
        color: ratingColors[ratingCategory],
        text: ratings[ratingCategory]
      };

    default:
      return state;
  }
};

var _default = ratingReducer;
exports["default"] = _default;
},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  search: '',
  category: '',
  page: 1,
  limit: 5,
  totalElements: 0
};

var searchReducer = function searchReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SEARCH':
      return _objectSpread(_objectSpread({}, state), {}, {
        search: action.payload
      });

    case 'CATEGORY':
      return _objectSpread(_objectSpread({}, state), {}, {
        category: action.payload
      });

    case 'PAGE':
      return _objectSpread(_objectSpread({}, state), {}, {
        page: action.payload
      });

    case 'LIMIT':
      return _objectSpread(_objectSpread({}, state), {}, {
        limit: action.payload
      });

    case 'TOTAL_ELEMENTS':
      return _objectSpread(_objectSpread({}, state), {}, {
        totalElements: action.payload
      });

    default:
      return state;
  }
};

var _default = searchReducer;
exports["default"] = _default;
},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Categories = Categories;

function Categories(props) {
  var goTo = function goTo(href) {
    window.location.href = href;
  };

  var categories = ['Breakfast', 'Lunch', 'Snack', 'Dinner'].map(function (el, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "home__category    shadow-lg",
      key: index,
      onClick: function onClick() {
        return goTo("/items?category=".concat(el));
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "home__category-label",
      style: {
        bottom: "5px",
        left: "6px"
      }
    }, el), /*#__PURE__*/React.createElement("img", {
      className: "home__category-img",
      style: {
        objectPosition: index === 2 ? 'bottom' : ''
      },
      src: '/images/structure/' + el + '.jpg'
    }));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "home__categories"
  }, categories);
}
},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = HomePage;

var _Title = require("./Title.js");

var _Categories = require("./Categories.js");

function HomePage(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "home__container"
  }, /*#__PURE__*/React.createElement(_Title.Title, null), /*#__PURE__*/React.createElement(_Categories.Categories, null));
}
},{"./Categories.js":7,"./Title.js":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = Title;

function Title(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "home__title"
  }, /*#__PURE__*/React.createElement("h1", null, "What are we eating ", /*#__PURE__*/React.createElement("span", {
    className: "showItems__todayTitle",
    style: {
      color: "red"
    }
  }, "today"), "?"));
}
},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddItemPage = AddItemPage;

var _ContainerImage = require("../layout/ContainerImage/ContainerImage.js");

var _ContainerText = require("../layout/ContainerText/ContainerText.js");

var _helpers = require("./helpers.js");

var useEffect = React.useEffect;

function AddItemPage(props) {
  var errors = (0, _helpers.getErrors)();
  params.image = '';
  return /*#__PURE__*/React.createElement("form", {
    className: "itemPage__container",
    id: "itemForm",
    action: "/items/add",
    method: "post",
    encType: "multipart/form-data",
    runat: "server"
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details"
  }, /*#__PURE__*/React.createElement(_ContainerImage.ContainerImage, {
    errors: errors
  }), /*#__PURE__*/React.createElement(_ContainerText.ContainerText, {
    errors: errors
  })));
}
},{"../layout/ContainerImage/ContainerImage.js":18,"../layout/ContainerText/ContainerText.js":24,"./helpers.js":13}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditItemPage = EditItemPage;

var _ContainerImage = require("../layout/ContainerImage/ContainerImage.js");

var _ContainerText = require("../layout/ContainerText/ContainerText.js");

var _helpers = require("./helpers.js");

var useEffect = React.useEffect;

function EditItemPage(props) {
  var errors = (0, _helpers.getErrors)();
  params.image = '/images/eating/' + params.form.ID + '.jpg';
  return /*#__PURE__*/React.createElement("form", {
    className: "itemPage__container",
    id: "itemForm",
    action: "/items/edit/" + params.form.slug,
    method: "post",
    encType: "multipart/form-data",
    runat: "server"
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details"
  }, /*#__PURE__*/React.createElement(_ContainerImage.ContainerImage, {
    errors: errors
  }), /*#__PURE__*/React.createElement(_ContainerText.ContainerText, {
    errors: errors
  })));
}
},{"../layout/ContainerImage/ContainerImage.js":18,"../layout/ContainerText/ContainerText.js":24,"./helpers.js":13}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowItemPage = ShowItemPage;

var _ratingActions = require("../../../redux/actions/ratingActions.js");

var useSelector = ReactRedux.useSelector;
var useDispatch = ReactRedux.useDispatch;

function ShowItemPage(props) {
  var item = params[0];
  var dispatch = useDispatch()((0, _ratingActions.setRating)(item.rating));
  var textForRating = useSelector(function (state) {
    return state.rating.text;
  });
  var colorForRating = useSelector(function (state) {
    return state.rating.color;
  });
  var ratingModified = Math.floor(item.rating / 10) + ',' + item.rating % 10;
  var myStyle = {
    backgroundColor: colorForRating
  };
  var imgDimension = "55vh";
  var triangleStyle = {
    borderRight: "calc(" + imgDimension + "/4) solid " + colorForRating,
    borderTop: "calc(" + imgDimension + "/4) solid " + colorForRating
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "itemPage__container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexGrow: "1"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-img-border"
  }), /*#__PURE__*/React.createElement("img", {
    className: "itemPage__details-img",
    src: "/images/eating/" + item.ID + ".jpg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__rating    shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__rating-triangle",
    style: triangleStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__rating-number"
  }, ratingModified)))), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__title"
  }, /*#__PURE__*/React.createElement("h1", null, item.title)), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-category"
  }, "Category:"), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-value"
  }, item.category), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-category"
  }, "Rating:"), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-value"
  }, /*#__PURE__*/React.createElement("span", {
    style: myStyle
  }, textForRating)))));
}
},{"../../../redux/actions/ratingActions.js":2}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrors = getErrors;

function getErrors() {
  if (params.errors) {
    return {
      imageError: params.errors.find(function (element) {
        return element.param === 'image-validation';
      }),
      titleError: params.errors.find(function (element) {
        return element.param === 'title';
      }),
      categoryError: params.errors.find(function (element) {
        return element.param === 'category';
      })
    };
  }

  return {};
}
},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchMessage = SearchMessage;
var useSelector = ReactRedux.useSelector;

function SearchMessage(props) {
  var search = useSelector(function (state) {
    return state.search.search;
  });
  var totalElements = useSelector(function (state) {
    return state.search.totalElements;
  });
  var searchMessage = search ? "You searched for '".concat(search, "':") : null;
  var noElementFound = totalElements ? null : 'No element found!';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__search-message"
  }, searchMessage), /*#__PURE__*/React.createElement("div", null, noElementFound));
}
},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowItemsPage = ShowItemsPage;

var _SearchBar = require("../../layout/SearchBar/SearchBar.js");

var _Pagination = require("../../layout/Pagination/Pagination.js");

var _SearchMessage = require("./SearchMessage.js");

var _searchActions = require("../../../redux/actions/searchActions.js");

var _helpers = require("./helpers.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = React.useState;
var useEffect = React.useEffect;

function ShowItemsPage(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__mainContent"
  }, /*#__PURE__*/React.createElement(_SearchBar.SearchBar, null), /*#__PURE__*/React.createElement(Items, null));
}

function Items(props) {
  var useDispatch = ReactRedux.useDispatch();

  var _useState = useState({
    data: null,
    changeable: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  useEffect(function () {
    return (0, _helpers.fetchItemsToShow)(setItems, useDispatch);
  }, []); // These variables can be modified from another part of the application

  var _getStateSearchParams = (0, _helpers.getStateSearchParams)(),
      page = _getStateSearchParams.page,
      search = _getStateSearchParams.search,
      category = _getStateSearchParams.category;

  useEffect(function () {
    return (0, _helpers.changeURLPageReset)(items.changeable, {
      search: search,
      category: category
    });
  }, [search, category]);
  useEffect(function () {
    return (0, _helpers.changeURL)(items.changeable, {
      search: search,
      category: category,
      page: page
    });
  }, [page]);
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__items"
  }, /*#__PURE__*/React.createElement(_SearchMessage.SearchMessage, null), items.data, /*#__PURE__*/React.createElement(_Pagination.Pagination, null));
}
},{"../../../redux/actions/searchActions.js":3,"../../layout/Pagination/Pagination.js":44,"../../layout/SearchBar/SearchBar.js":49,"./SearchMessage.js":14,"./helpers.js":16}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchItemsToShow = fetchItemsToShow;
exports.changeURLPageReset = changeURLPageReset;
exports.changeURL = changeURL;
exports.getStateSearchParams = getStateSearchParams;

var _searchActions = require("../../../redux/actions/searchActions.js");

var _SearchItem = require("../layout/SearchItem/SearchItem.js");

var useSelector = ReactRedux.useSelector;

function fetchItemsToShow(setItems, useDispatch) {
  var _getParamsURL = getParamsURL(),
      pageURL = _getParamsURL.pageURL,
      searchURL = _getParamsURL.searchURL,
      categoryURL = _getParamsURL.categoryURL;

  setParamsToState({
    page: pageURL,
    search: searchURL,
    category: categoryURL
  }, useDispatch);
  fetch("http://www.localhost:3000/items/all?search=".concat(searchURL, "&category=").concat(categoryURL, "&page=").concat(pageURL)).then(function (response) {
    return response.json();
  }).then(function (data) {
    useDispatch((0, _searchActions.setSearchField)({
      type: 'TOTAL_ELEMENTS',
      payload: data.totalElements
    }));
    var itemsToShow = data.items.map(function (el, index) {
      return /*#__PURE__*/React.createElement(_SearchItem.Item, {
        key: index,
        props: el
      });
    }); // From now, if some variables change, you can change the page

    setItems({
      data: itemsToShow,
      changeable: true
    });
  });
}

function getParamsURL() {
  var url = new URL(window.location.href);
  var pageURL = url.searchParams.get('page') ? Number(url.searchParams.get('page')) : 1;
  var searchURL = url.searchParams.get('search') ? url.searchParams.get('search') : '';
  var categoryURL = url.searchParams.get('category') ? url.searchParams.get('category') : '';
  return {
    pageURL: pageURL,
    searchURL: searchURL,
    categoryURL: categoryURL
  };
}

function setParamsToState(_ref, useDispatch) {
  var page = _ref.page,
      search = _ref.search,
      category = _ref.category;
  useDispatch((0, _searchActions.setSearchField)({
    type: 'PAGE',
    payload: page
  }));
  useDispatch((0, _searchActions.setSearchField)({
    type: 'SEARCH',
    payload: search
  }));
  useDispatch((0, _searchActions.setSearchField)({
    type: 'CATEGORY',
    payload: category
  }));
}

function changeURLPageReset(changeable, _ref2) {
  var search = _ref2.search,
      category = _ref2.category;
  if (changeable) window.location.href = "http://www.localhost:3000/items?search=".concat(search, "&category=").concat(category);
}

function changeURL(changeable, _ref3) {
  var search = _ref3.search,
      category = _ref3.category,
      page = _ref3.page;
  if (changeable) window.location.href = "http://www.localhost:3000/items?search=".concat(search, "&category=").concat(category, "&page=").concat(page);
}

function getStateSearchParams() {
  return {
    page: useSelector(function (state) {
      return state.search.page;
    }),
    search: useSelector(function (state) {
      return state.search.search;
    }),
    category: useSelector(function (state) {
      return state.search.category;
    })
  };
}
},{"../../../redux/actions/searchActions.js":3,"../layout/SearchItem/SearchItem.js":32}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PackItemPages = PackItemPages;

var _Show = require("./Methods/Show.js");

var _Add = require("./Methods/Add.js");

var _Edit = require("./Methods/Edit.js");

var _ShowAll = require("./ShowAll/ShowAll.js");

var Switch = ReactRouterDOM.Switch;
var Route = ReactRouterDOM.Route;

function PackItemPages(props) {
  var _ReactRouterDOM$useRo = ReactRouterDOM.useRouteMatch(),
      path = _ReactRouterDOM$useRo.path;

  return /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    path: path + "/",
    exact: true,
    component: _ShowAll.ShowItemsPage
  }), /*#__PURE__*/React.createElement(Route, {
    path: path + "/add",
    component: _Add.AddItemPage
  }), /*#__PURE__*/React.createElement(Route, {
    path: path + "/show/:itemID",
    component: _Show.ShowItemPage
  }), /*#__PURE__*/React.createElement(Route, {
    path: path + "/edit/:itemID",
    component: _Edit.EditItemPage
  }));
}
},{"./Methods/Add.js":10,"./Methods/Edit.js":11,"./Methods/Show.js":12,"./ShowAll/ShowAll.js":15}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerImage = ContainerImage;

var _ItemRatingTriangle = require("./ItemRatingTriangle.js");

var _ImageFile = require("./ImageFile.js");

var _helpers = require("./helpers.js");

function ContainerImage(_ref) {
  var errors = _ref.errors;
  return /*#__PURE__*/React.createElement("div", {
    className: "itemPage__container-img"
  }, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-img-border"
  }), /*#__PURE__*/React.createElement("img", {
    className: "itemPage__details-img",
    src: params.image ? params.image : null
  }), /*#__PURE__*/React.createElement(_helpers.AddImageButton, {
    errors: errors
  }), /*#__PURE__*/React.createElement(_helpers.ImageError, {
    errors: errors
  }), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__rating    shadow"
  }, /*#__PURE__*/React.createElement(_ItemRatingTriangle.ItemRatingTriangle, null), /*#__PURE__*/React.createElement("label", {
    className: "itemPage__label-image",
    htmlFor: "image"
  })), /*#__PURE__*/React.createElement(_ImageFile.ImageFile, null));
}
},{"./ImageFile.js":19,"./ItemRatingTriangle.js":20,"./helpers.js":21}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageFile = ImageFile;

var _helpers = require("./helpers.js");

function ImageFile(props) {
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

function handleChangeImage(event) {
  (0, _helpers.readURL)(event.target);
  document.getElementById("image-validation").value = "true";
  document.getElementsByClassName("itemPage__img-error")[0].style.display = "none";
  document.getElementsByClassName("bi-file-earmark-image")[0].style.display = "none";
}
},{"./helpers.js":21}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemRatingTriangle = ItemRatingTriangle;
var useSelector = ReactRedux.useSelector;

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
},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageError = ImageError;
exports.readURL = readURL;
exports.AddImageButton = AddImageButton;

function ImageError(_ref) {
  var errors = _ref.errors;
  return /*#__PURE__*/React.createElement("div", {
    className: "itemPage__img-error"
  }, errors.imageError ? errors.imageError.msg : null);
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

function AddImageButton(_ref2) {
  var errors = _ref2.errors;
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
},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AcceptButton = AcceptButton;
exports.RejectButton = RejectButton;

function AcceptButton(props) {
  return /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      return document.getElementById("itemForm").submit();
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
    href: "/items"
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
},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = Category;

function Category(_ref) {
  var handleChange = _ref.handleChange,
      item = _ref.item,
      errors = _ref.errors;
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
    onChange: handleChange
  }, /*#__PURE__*/React.createElement("option", {
    defaultValue: true
  }, "- Set the category -"), categories)));
}
},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerText = ContainerText;

var _Title = require("./Title.js");

var _Category = require("./Category.js");

var _Rating = require("./Rating.js");

var _ButtonsSVG = require("./ButtonsSVG.js");

var _helpers = require("./helpers.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = React.useState;

function ContainerText(_ref) {
  var errors = _ref.errors;

  var _useState = useState((0, _helpers.initialItemState)()),
      _useState2 = _slicedToArray(_useState, 2),
      item = _useState2[0],
      setItem = _useState2[1];

  return /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text"
  }, /*#__PURE__*/React.createElement(_Title.Title, {
    item: item,
    handleChange: function handleChange(e) {
      return (0, _helpers.handleChange)(e, item, setItem);
    },
    errors: errors
  }), /*#__PURE__*/React.createElement(_Category.Category, {
    handleChange: function handleChange(e) {
      return (0, _helpers.handleChange)(e, item, setItem);
    },
    item: item,
    errors: errors
  }), /*#__PURE__*/React.createElement(_Rating.Rating, null), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__buttons"
  }, /*#__PURE__*/React.createElement(_ButtonsSVG.AcceptButton, null), /*#__PURE__*/React.createElement(_ButtonsSVG.RejectButton, null)));
}
},{"./ButtonsSVG.js":22,"./Category.js":23,"./Rating.js":25,"./Title.js":26,"./helpers.js":27}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rating = Rating;

var _helpers = require("./helpers.js");

var useSelector = ReactRedux.useSelector;
var useEffect = React.useEffect;

function Rating(props) {
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
  useEffect(function () {
    return (0, _helpers.setFormParams)(useDispatch);
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-category"
  }, "Rating:"), /*#__PURE__*/React.createElement("div", {
    className: "itemPage__details-text-value"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      backgroundColor: colorForRating
    }
  }, textForRating)), /*#__PURE__*/React.createElement("input", {
    className: "itemPage__range custom-range",
    name: "rating",
    type: "range",
    onChange: function onChange(e) {
      return (0, _helpers.handleChangeRating)(e, useDispatch);
    },
    min: "0",
    max: "100",
    value: rating
  }));
}
},{"./helpers.js":27}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = Title;

function Title(_ref) {
  var item = _ref.item,
      handleChange = _ref.handleChange,
      errors = _ref.errors;
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
    onChange: handleChange,
    placeholder: "Product title",
    value: item.title
  })));
}
},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleChangeRating = handleChangeRating;
exports.setFormParams = setFormParams;
exports.handleChange = handleChange;
exports.initialItemState = initialItemState;

var _ratingActions = require("../../../../redux/actions/ratingActions.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function handleChangeRating(event, useDispatch) {
  useDispatch((0, _ratingActions.setRating)(event.target.value));
}

;

function setFormParams(useDispatch) {
  if (params.form) useDispatch((0, _ratingActions.setRating)(params.form.rating));
}

function handleChange(event, entity, setEntity) {
  setEntity(_objectSpread(_objectSpread({}, entity), {}, _defineProperty({}, event.target.name, event.target.value)));
}

function initialItemState() {
  return {
    title: params.form ? params.form.title : "",
    category: params.form ? params.form.category : "Set the category"
  };
}
},{"../../../../redux/actions/ratingActions.js":2}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditItemButton = EditItemButton;
exports.DeleteItemButton = DeleteItemButton;

function EditItemButton(_ref) {
  var slug = _ref.slug;
  return /*#__PURE__*/React.createElement("a", {
    href: "/items/edit/" + slug,
    className: "showItems__item__button__edit"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-pencil",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
  })));
}

function DeleteItemButton(_ref2) {
  var slug = _ref2.slug;

  var deleteElement = function deleteElement() {
    document.getElementById("deleteItem-" + slug).submit();
  };

  return /*#__PURE__*/React.createElement("form", {
    className: "showItems__item__button__delete",
    action: "/items/delete/" + slug,
    method: "post",
    id: "deleteItem-" + slug,
    onClick: deleteElement
  }, /*#__PURE__*/React.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-trash",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
  })));
}
},{}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemBorder = ItemBorder;

function ItemBorder(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__img-border"
  });
}
},{}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemRating = ItemRating;

function ItemRating(_ref) {
  var rating = _ref.rating;
  var ratingModified = rating < 100 ? Math.floor(rating / 10) + "," + rating % 10 : 10;
  var ratingColors = ["#7a0000", "#a30000", "#e00000", "#ff5e00", "#ff9900", "#fff200", "#f6ff00", "#e3fc03", "#c2fc03", "#6fff00", "#00ff22"];
  var triangleColor = ratingColors[Math.floor(rating / 10)];
  var myStyle = {
    borderRight: "25px solid " + triangleColor,
    borderTop: "25px solid " + triangleColor
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__rating    shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__rating-triangle",
    style: myStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__rating-number"
  }, ratingModified)));
}
},{}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemText = ItemText;

var _ButtonsSVG = require("./ButtonsSVG.js");

function ItemText(_ref) {
  var title = _ref.title,
      category = _ref.category,
      slug = _ref.slug;
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__details    shadow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__details-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "showItems__item__title"
  }, /*#__PURE__*/React.createElement("a", {
    href: '/items/show/' + slug
  }, title)), /*#__PURE__*/React.createElement("span", null, category)), /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__details-buttons"
  }, /*#__PURE__*/React.createElement(_ButtonsSVG.EditItemButton, {
    slug: slug
  }), /*#__PURE__*/React.createElement(_ButtonsSVG.DeleteItemButton, {
    slug: slug
  })));
}
},{"./ButtonsSVG.js":28}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = Item;

var _ItemRating = require("./ItemRating.js");

var _ItemText = require("./ItemText.js");

var _ItemBorder = require("./ItemBorder.js");

function Item(_ref) {
  var props = _ref.props;
  var ID = props.ID,
      title = props.title,
      category = props.category,
      rating = props.rating,
      slug = props.slug;
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__item"
  }, /*#__PURE__*/React.createElement(_ItemBorder.ItemBorder, null), /*#__PURE__*/React.createElement("img", {
    className: "showItems__item__img",
    src: "/images/eating-small/" + ID + "-small.jpg"
  }), /*#__PURE__*/React.createElement("a", {
    className: "showItems__item__linkTo",
    href: '/items/show/' + slug
  }, /*#__PURE__*/React.createElement(_ItemRating.ItemRating, {
    rating: rating
  })), /*#__PURE__*/React.createElement(_ItemText.ItemText, {
    title: title,
    category: category,
    slug: slug
  }));
}
},{"./ItemBorder.js":29,"./ItemRating.js":30,"./ItemText.js":31}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = Footer;

var _FooterDayPeriod = require("./FooterDayPeriod.js");

var _FooterTime = require("./FooterTime.js");

function Footer(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "footer"
  }, /*#__PURE__*/React.createElement(_FooterDayPeriod.FooterDayPeriod, null), /*#__PURE__*/React.createElement(_FooterTime.FooterTime, null));
}
},{"./FooterDayPeriod.js":34,"./FooterTime.js":35}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterDayPeriod = FooterDayPeriod;

var _helpers = require("./helpers.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = React.useState;
var useEffect = React.useEffect;

function FooterDayPeriod(props) {
  var _useState = useState(new Date()),
      _useState2 = _slicedToArray(_useState, 2),
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
},{"./helpers.js":36}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterTime = FooterTime;

var _helpers = require("./helpers.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = React.useState;
var useEffect = React.useEffect;

function FooterTime(props) {
  var _useState = useState(new Date()),
      _useState2 = _slicedToArray(_useState, 2),
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
},{"./helpers.js":36}],36:[function(require,module,exports){
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
},{}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = Header;

var _searchActions = require("../../../redux/actions/searchActions.js");

var _helpers = require("./helpers.js");

function Header(props) {
  var buttons = [{
    name: 'Homepage',
    href: '/'
  }, {
    name: 'All products',
    href: '/items'
  }].map(function (el, index) {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "btn btn-warning header__categoryButton",
      onClick: function onClick() {
        return (0, _helpers.goTo)(el.href);
      },
      key: index
    }, el.name);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, buttons);
}
},{"../../../redux/actions/searchActions.js":3,"./helpers.js":38}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goTo = goTo;

function goTo(href) {
  window.location.href = href;
}
},{}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = Message;

var _helpers = require("./helpers.js");

function Message(props) {
  var _getMessage = (0, _helpers.getMessage)(),
      message = _getMessage.message,
      className = _getMessage.className;

  if (!message) return null;
  (0, _helpers.closeMessageTimeout)();
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
  }, /*#__PURE__*/React.createElement(_helpers.RejectButton, null))));
}
},{"./helpers.js":40}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RejectButton = RejectButton;
exports.closeMessageTimeout = closeMessageTimeout;
exports.getMessage = getMessage;

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

function getMessage() {
  return {
    message: params.success ? params.success : null,
    className: params.success ? 'success' : null
  };
}
},{}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangePageButtonSVG = ChangePageButtonSVG;

function ChangePageButtonSVG(_ref) {
  var direction = _ref.direction;
  if (direction == 'left') return /*#__PURE__*/React.createElement("svg", {
    width: "0.5em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-chevron-left",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
  }));
  if (direction == 'right') return /*#__PURE__*/React.createElement("svg", {
    width: "0.5em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-chevron-right",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
  }));
  if (direction == 'begin') return /*#__PURE__*/React.createElement("svg", {
    width: "0.5em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-chevron-double-left",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
  }));
  if (direction == 'end') return /*#__PURE__*/React.createElement("svg", {
    width: "0.5em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-chevron-double-right",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
  }));
}
},{}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangePageButton = ChangePageButton;

var _ButtonsSVG = require("./ButtonsSVG.js");

function ChangePageButton(_ref) {
  var direction = _ref.direction,
      inactiveButtonPage = _ref.inactiveButtonPage,
      changePage = _ref.changePage;
  return /*#__PURE__*/React.createElement("li", {
    className: "page-item" + (inactiveButtonPage ? " disabled" : '')
  }, /*#__PURE__*/React.createElement("a", {
    className: "page-link",
    onClick: function onClick() {
      if (!inactiveButtonPage) changePage();
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_ButtonsSVG.ChangePageButtonSVG, {
    direction: direction
  }))));
}
},{"./ButtonsSVG.js":41}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberButtons = NumberButtons;

var _helpers = require("./helpers.js");

function NumberButtons(_ref) {
  var page = _ref.page,
      totalPages = _ref.totalPages,
      useDispatch = _ref.useDispatch;
  var labels = (0, _helpers.getLabels)(page, totalPages);
  var numberButtons = labels.map(function (el, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: "page-item" + (page == labels[index] ? " active" : ''),
      key: index
    }, /*#__PURE__*/React.createElement("a", {
      className: "page-link",
      onClick: function onClick() {
        (0, _helpers.goToPage)(labels[index], useDispatch);
      }
    }, labels[index]));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, numberButtons);
}
},{"./helpers.js":45}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = Pagination;

var _ChangePageButton = require("./ChangePageButton.js");

var _NumberButtons = require("./NumberButtons.js");

var _helpers = require("./helpers.js");

function Pagination(props) {
  var useDispatch = ReactRedux.useDispatch();

  var _getPaginationParams = (0, _helpers.getPaginationParams)(),
      page = _getPaginationParams.page,
      limit = _getPaginationParams.limit,
      totalElements = _getPaginationParams.totalElements,
      totalPages = _getPaginationParams.totalPages;

  var _getBoundaryPages = (0, _helpers.getBoundaryPages)(page, totalPages),
      firstPage = _getBoundaryPages.firstPage,
      lastPage = _getBoundaryPages.lastPage,
      betweenPages = _getBoundaryPages.betweenPages;

  if (totalPages == 0) return null;
  return /*#__PURE__*/React.createElement("nav", {
    className: "showItems__pagination-nav"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "pagination"
  }, /*#__PURE__*/React.createElement(_ChangePageButton.ChangePageButton, {
    direction: "begin",
    inactiveButtonPage: firstPage,
    changePage: function changePage() {
      return (0, _helpers.goToPage)(1, useDispatch);
    }
  }), /*#__PURE__*/React.createElement(_ChangePageButton.ChangePageButton, {
    direction: "left",
    inactiveButtonPage: firstPage,
    changePage: function changePage() {
      return (0, _helpers.goToPage)(page - 1, useDispatch);
    }
  }), /*#__PURE__*/React.createElement(_NumberButtons.NumberButtons, {
    page: page,
    totalPages: totalPages,
    useDispatch: useDispatch
  }), /*#__PURE__*/React.createElement(_ChangePageButton.ChangePageButton, {
    direction: "right",
    inactiveButtonPage: lastPage,
    changePage: function changePage() {
      return (0, _helpers.goToPage)(page + 1, useDispatch);
    }
  }), /*#__PURE__*/React.createElement(_ChangePageButton.ChangePageButton, {
    direction: "end",
    inactiveButtonPage: lastPage,
    changePage: function changePage() {
      return (0, _helpers.goToPage)(totalPages, useDispatch);
    }
  })));
}
},{"./ChangePageButton.js":42,"./NumberButtons.js":43,"./helpers.js":45}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPaginationParams = getPaginationParams;
exports.getBoundaryPages = getBoundaryPages;
exports.getLabels = getLabels;
exports.goToPage = goToPage;

var _searchActions = require("../../../redux/actions/searchActions.js");

var useSelector = ReactRedux.useSelector;

function getPaginationParams() {
  var page = useSelector(function (state) {
    return state.search.page;
  });
  var limit = useSelector(function (state) {
    return state.search.limit;
  });
  var totalElements = useSelector(function (state) {
    return state.search.totalElements;
  });
  var totalPages = Math.ceil(totalElements / limit);
  return {
    page: page,
    limit: limit,
    totalElements: totalElements,
    totalPages: totalPages
  };
}

function getBoundaryPages(page, totalPages) {
  var firstPage = page == 1 ? true : false;
  var lastPage = page == totalPages ? true : false;
  var betweenPages = firstPage || lastPage ? false : true;
  return {
    firstPage: firstPage,
    lastPage: lastPage,
    betweenPages: betweenPages
  };
}

function getLabels(page, totalPages) {
  var labels = [];

  var _getBoundaryPages = getBoundaryPages(page, totalPages),
      firstPage = _getBoundaryPages.firstPage,
      lastPage = _getBoundaryPages.lastPage,
      betweenPages = _getBoundaryPages.betweenPages;

  if (totalPages < 3) {
    for (var i = 1; i <= totalPages; i++) {
      labels.push(i);
    }
  } else if (firstPage) labels = [1, 2, 3];else if (lastPage) labels = [totalPages - 2, totalPages - 1, totalPages];else if (betweenPages) labels = [page - 1, page, page + 1];

  return labels;
}

function goToPage(page, useDispatch) {
  useDispatch((0, _searchActions.setSearchField)({
    type: 'PAGE',
    payload: page
  }));
}
},{"../../../redux/actions/searchActions.js":3}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddItemButton = AddItemButton;
exports.FilterButtonSVG = FilterButtonSVG;
exports.SearchButton = SearchButton;

function AddItemButton(props) {
  return /*#__PURE__*/React.createElement("a", {
    className: "showItems__button",
    href: "/items/add"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "2em",
    height: "2em",
    viewBox: "0 0 16 16",
    className: "bi bi-plus",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
  })));
}

function FilterButtonSVG(props) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "2em",
    height: "2em",
    viewBox: "0 0 16 16",
    className: "bi bi-list",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
  }));
}

function SearchButton(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__button",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("svg", {
    width: "2em",
    height: "2em",
    viewBox: "0 0 16 16",
    className: "bi bi-search",
    fillRule: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
  })));
}
},{}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterButton = FilterButton;

var _FilterButtonCategories = require("./FilterButtonCategories.js");

var _ButtonsSVG = require("./ButtonsSVG.js");

function FilterButton(_ref) {
  var categoryChecked = _ref.categoryChecked,
      onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__button"
  }, /*#__PURE__*/React.createElement("a", {
    className: "showItems__dropdownSVG",
    "data-toggle": "dropdown"
  }, /*#__PURE__*/React.createElement(_ButtonsSVG.FilterButtonSVG, null)), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-menu p-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown-header"
  }, "Categories"), /*#__PURE__*/React.createElement(_FilterButtonCategories.FilterButtonCategories, {
    categoryChecked: categoryChecked,
    onChange: onChange
  })));
}
},{"./ButtonsSVG.js":46,"./FilterButtonCategories.js":48}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterButtonCategories = FilterButtonCategories;

function FilterButtonCategories(_ref) {
  var categoryChecked = _ref.categoryChecked,
      onChange = _ref.onChange;
  if (!categoryChecked) categoryChecked = 'All categories';
  var categories = ['All categories', 'Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Snack'].map(function (el, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "dropdown-item",
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-check form-check-inline"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-check-input",
      type: "radio",
      name: "category",
      id: 'categoryOption' + index,
      onChange: onChange,
      value: el !== 'All categories' ? el : '',
      defaultChecked: el === categoryChecked ? true : false
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        fontSize: "14px"
      },
      className: "form-check-label",
      htmlFor: 'categoryOption' + index
    }, el)));
  });
  return /*#__PURE__*/React.createElement("div", null, categories);
}
},{}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = SearchBar;

var _FilterButton = require("./FilterButton.js");

var _ButtonsSVG = require("./ButtonsSVG.js");

var _helpers = require("./helpers.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useState = React.useState;
var useSelector = ReactRedux.useSelector;

function SearchBar(props) {
  var _useState = useState((0, _helpers.initStateSearchBar)()),
      _useState2 = _slicedToArray(_useState, 2),
      searchBar = _useState2[0],
      setSearchBar = _useState2[1];

  var useDispatch = ReactRedux.useDispatch();
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__searchingBar"
  }, /*#__PURE__*/React.createElement(_ButtonsSVG.AddItemButton, null), /*#__PURE__*/React.createElement("div", {
    className: "showItems__searchFields"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "search",
    className: "form-control col-3",
    placeholder: "Search for something",
    value: searchBar.search,
    onChange: function onChange(e) {
      return (0, _helpers.handleChange)(e, searchBar, setSearchBar);
    },
    onKeyDown: function onKeyDown(e) {
      return (0, _helpers.onKeyDown)(e, searchBar, useDispatch);
    }
  }), /*#__PURE__*/React.createElement(_ButtonsSVG.SearchButton, {
    onClick: function onClick(e) {
      return (0, _helpers.handleSubmit)(e, searchBar, useDispatch);
    }
  }), /*#__PURE__*/React.createElement(_FilterButton.FilterButton, {
    categoryChecked: searchBar.category,
    onChange: function onChange(e) {
      return (0, _helpers.handleChange)(e, searchBar, setSearchBar);
    }
  })));
}
},{"./ButtonsSVG.js":46,"./FilterButton.js":47,"./helpers.js":50}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStateSearchBar = initStateSearchBar;
exports.handleChange = handleChange;
exports.handleSubmit = handleSubmit;
exports.onKeyDown = onKeyDown;

var _searchActions = require("../../../redux/actions/searchActions.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function initStateSearchBar() {
  var url = new URL(window.location.href);
  var searchURL = url.searchParams.get('search') ? url.searchParams.get('search') : '';
  var categoryURL = url.searchParams.get('category') ? url.searchParams.get('category') : '';
  var initialState = {
    search: searchURL,
    category: categoryURL
  };
  return initialState;
}

function handleChange(event, entity, setEntity) {
  setEntity(_objectSpread(_objectSpread({}, entity), {}, _defineProperty({}, event.target.name, event.target.value)));
}

function handleSubmit(event, searchBar, useDispatch) {
  useDispatch((0, _searchActions.setSearchField)({
    type: 'SEARCH',
    payload: searchBar.search
  }));
  useDispatch((0, _searchActions.setSearchField)({
    type: 'CATEGORY',
    payload: searchBar.category
  }));
}

function onKeyDown(event, searchBar, useDispatch) {
  if (event.key === 'Enter') {
    handleSubmit(event, searchBar, useDispatch);
  }
}
},{"../../../redux/actions/searchActions.js":3}]},{},[1]);
