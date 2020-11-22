'use strict';

export function Item(_ref) {
	var props = _ref.props;
	var ID = props.ID,
	    title = props.title,
	    category = props.category,
	    rating = props.rating,
	    slug = props.slug;

	return React.createElement(
		"div",
		{ className: "home__item" },
		React.createElement("img", { className: "home__item__img", src: "/images/eating-small/" + ID + "-small.jpg" }),
		React.createElement(
			"a",
			{ className: "home__item__linkTo", href: '/item/show/' + slug },
			React.createElement(ItemRating, { rating: rating })
		),
		React.createElement(ItemDetails, { title: title, category: category, slug: slug })
	);
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

	return React.createElement(
		"div",
		{ className: "home__item__rating    home__item__border-animation" },
		React.createElement(
			"div",
			{ className: "home__item__rating-triangle", style: myStyle },
			React.createElement(
				"div",
				{ className: "home__item__rating-number" },
				ratingModified
			)
		)
	);
}

function ItemDetails(_ref3) {
	var title = _ref3.title,
	    category = _ref3.category,
	    slug = _ref3.slug;

	return React.createElement(
		"div",
		{ className: "home__item__details" },
		React.createElement(
			"div",
			{ className: "home__item__details-text" },
			React.createElement(
				"span",
				{ className: "home__item__title" },
				React.createElement(
					"a",
					{ href: '/item/show/' + slug },
					title
				)
			),
			React.createElement(
				"span",
				null,
				category
			)
		),
		React.createElement(
			"div",
			{ className: "home__item__details-buttons" },
			React.createElement(EditItemButton, { slug: slug }),
			React.createElement(DeleteItemButton, { slug: slug })
		)
	);
}

function EditItemButton(_ref4) {
	var slug = _ref4.slug;

	return React.createElement(
		"a",
		{ href: "/item/edit/" + slug, className: "home__item__button" },
		React.createElement(
			"svg",
			{ width: "1em", height: "1em", viewBox: "0 0 16 16", className: "bi bi-pencil", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" },
			React.createElement("path", { fillRule: "evenodd", d: "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" })
		)
	);
}

function DeleteItemButton(_ref5) {
	var slug = _ref5.slug;


	var deleteElement = function deleteElement() {
		document.getElementById("deleteItem-" + slug).submit();
	};

	return React.createElement(
		"form",
		{ className: "home__item__button", action: "/item/delete/" + slug, method: "post", id: "deleteItem-" + slug, onClick: deleteElement },
		React.createElement(
			"svg",
			{ width: "1em", height: "1em", viewBox: "0 0 16 16", className: "bi bi-trash", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" },
			React.createElement("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" }),
			React.createElement("path", { fillRule: "evenodd", d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" })
		)
	);
}