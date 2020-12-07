'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomePage = HomePage;
var useState = React.useState;
var useEffect = React.useEffect;
var useSelector = ReactRedux.useSelector;

function HomePage(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "home__container"
  }, /*#__PURE__*/React.createElement(Title, null), /*#__PURE__*/React.createElement(Categories, null));
}

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