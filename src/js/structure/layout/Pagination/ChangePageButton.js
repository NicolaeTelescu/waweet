'use strict';

import {ChangePageButtonSVG} from './ButtonsSVG.js';

export function ChangePageButton({direction, inactivePage, nextPage, goToPage}) {
	return (
		<li className={"page-item" + (inactivePage ? " disabled" : '')}>
			<a className="page-link" onClick={() => {if (!inactivePage) goToPage(nextPage)}}>
				<span><ChangePageButtonSVG direction={direction} /></span>
			</a>
		</li>
	);
}