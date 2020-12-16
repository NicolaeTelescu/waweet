'use strict';

import {FilterButtonCategories} from './FilterButtonCategories.js';
import {FilterButtonSVG} from './ButtonsSVG.js';

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