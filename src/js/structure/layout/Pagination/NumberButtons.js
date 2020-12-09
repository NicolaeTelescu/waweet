'use strict';

import {getLabels, goToPage} from './helpers.js';

export function NumberButtons({page, totalPages, useDispatch}) {
	let labels = getLabels(page, totalPages);
	
	const numberButtons = labels.map((el, index) => (
		<li className={"page-item" + ((page == labels[index]) ? " active" : '')} key={index}>
			<a className="page-link" onClick={() => {goToPage(labels[index], useDispatch)}}>
				{labels[index]}
			</a>
		</li>
	));

	return (
		<>
			{numberButtons}
		</>
	);
}