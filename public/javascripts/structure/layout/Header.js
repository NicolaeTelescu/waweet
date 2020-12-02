'use strict';

import { setSearchField } from './../../redux/actions/searchActions.js';

export function Header(props) {

	return React.createElement(
		'div',
		{ className: 'header' },
		React.createElement(AllProductsButton, null)
	);
}

function AllProductsButton(_ref) {
	var _onClick = _ref.onClick;

	return React.createElement(
		'button',
		{ type: 'button', className: 'btn btn-warning header__categoryButton', onClick: function onClick() {
				return _onClick('');
			} },
		React.createElement(
			'a',
			{ href: '/' },
			'All products'
		)
	);
}