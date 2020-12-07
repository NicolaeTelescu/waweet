'use strict';

import {FilterButtonCategories} from './FilterButtonCategories.js';

export function FilterButton({categoryChecked, onChange}) {

	return (
		<div className="showItems__button">
			<a className="showItems__dropdownSVG" data-toggle="dropdown">
				<FilterButtonSVG />
			</a>
			<div className="dropdown-menu p-2">
				<div className="dropdown-header">Categories</div>
				<FilterButtonCategories categoryChecked={categoryChecked} onChange={onChange} />
			</div>
		</div>
	);
}


function FilterButtonSVG(props) {
	return (
		<svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
		</svg>
	);
}