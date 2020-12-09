'use strict';

import {setSearchField} from '../../../redux/actions/searchActions.js';
import {goTo} from './helpers.js';

export function Header(props) {
	
	const buttons = [
		{ name: 'Homepage', href: '/' },
		{ name: 'All products', href: '/items' }
	]
	.map((el, index) => (
		<button type="button" className="btn btn-warning header__categoryButton" onClick={() => goTo(el.href)} key={index}>{el.name}</button>
	));

	return (		
		<div className="header">
			{buttons}
		</div>
	);
}