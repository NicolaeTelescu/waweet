'use strict';

import {setSearchField} from './../../redux/actions/searchActions.js';

export function Header(props) {
	
	const buttons = [
		{ name: 'Homepage', href: '/' },
		{ name: 'All products', href: '/items' }
	];

	return (		
		<div className="header">
			<HeaderLinks data={buttons} />
		</div>
	);
}

function HeaderLinks({data}) {

	const goTo = (href) => {
		window.location.href = href;
	}

	const linkButtons = data.map((el, index) => (
		<button type="button" className="btn btn-warning header__categoryButton" onClick={() => goTo(el.href)} key={index}>{el.name}</button>
	));

	return (
		<div>
			{linkButtons}
		</div>
	);
}