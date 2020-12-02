'use strict';

import {setSearchField} from './../../redux/actions/searchActions.js';

export function Header(props) {
	
	return (		
		<div className="header">
			<AllProductsButton />
		</div>
	);
}

function AllProductsButton({onClick}) {
	return (
		<button type="button" className="btn btn-warning header__categoryButton" onClick={() => onClick('')}><a href='/'>All products</a></button>
	);
}