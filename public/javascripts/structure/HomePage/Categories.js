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