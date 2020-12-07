'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = Item;

function Item(_ref) {
  var props = _ref.props;
  var ID = props.ID,
      title = props.title,
      category = props.category,
      rating = props.rating,
      slug = props.slug;
  return /*#__PURE__*/React.createElement("div", {
    className: "showItems__item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "showItems__item__img-border"
  }), /*#__PURE__*/React.createElement("img", {
    className: "showItems__item__img",
    src: "/images/eating-small/" + ID + "-small.jpg"
  }), /*#__PURE__*/React.createElement("a", {
    className: "showItems__item__linkTo",
    href: '/items/show/' + slug
  }, /*#__PURE__*/React.createElement(ItemRating, {
    rating: rating
  })), /*#__PURE__*/React.createElement(ItemDetails, {
    title: title,
    category: category,
    slug: slug
  }));
}

function ItemRating(_ref2) {
  var rating = _ref2.rating;
  var ratingModified = Math.floor(rating / 10) + "," + rating % 10;
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

function ItemDetails(_ref3) {
  var title = _ref3.title,
      category = _ref3.category,
      slug = _ref3.slug;
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
  }, /*#__PURE__*/React.createElement(EditItemButton, {
    slug: slug
  }), /*#__PURE__*/React.createElement(DeleteItemButton, {
    slug: slug
  })));
}

function EditItemButton(_ref4) {
  var slug = _ref4.slug;
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

function DeleteItemButton(_ref5) {
  var slug = _ref5.slug;

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