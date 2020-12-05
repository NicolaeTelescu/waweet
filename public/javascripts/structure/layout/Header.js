'use strict';

import { setSearchField } from './../../redux/actions/searchActions.js';

export function Header(props) {

	var buttons = [{ name: 'Homepage', href: '/' }, { name: 'All products', href: '/items' }];

	return React.createElement(
		'div',
		{ className: 'header' },
		React.createElement(HeaderLinks, { data: buttons })
	);
}

function HeaderLinks(_ref) {
	var data = _ref.data;


	var goTo = function goTo(href) {
		window.location.href = href;
	};

	var linkButtons = data.map(function (el, index) {
		return React.createElement(
			'button',
			{ type: 'button', className: 'btn btn-warning header__categoryButton', onClick: function onClick() {
					return goTo(el.href);
				}, key: index },
			el.name
		);
	});

	return React.createElement(
		'div',
		null,
		linkButtons
	);
}