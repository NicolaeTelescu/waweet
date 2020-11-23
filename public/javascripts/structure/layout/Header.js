'use strict';

export function Header(props) {

	var names = ['Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Snack'];
	var buttons = names.map(function (el, index) {
		return React.createElement(CategoryButton, { name: el, key: index });
	});

	return React.createElement(
		'form',
		{ className: 'header', id: 'headerForm' },
		buttons,
		React.createElement(AllProductsButton, null),
		React.createElement('input', { type: 'text', name: 'category', id: 'headerCategory', hidden: true })
	);
}

function CategoryButton(props) {

	var handleClick = function handleClick(event) {
		document.getElementById("headerCategory").value = props.name.toLowerCase();
		document.getElementById("headerForm").submit();
	};

	return React.createElement(
		'a',
		{ onClick: handleClick },
		React.createElement(
			'button',
			{ type: 'button', className: 'btn btn-warning header__categoryButton' },
			props.name
		)
	);
}

function AllProductsButton(props) {
	return React.createElement(
		'a',
		{ href: '/' },
		React.createElement(
			'button',
			{ type: 'button', className: 'btn btn-warning header__categoryButton' },
			'All products'
		)
	);
}