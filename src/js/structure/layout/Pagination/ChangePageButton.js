'use strict';

import {ChangePageButtonSVG} from './ButtonsSVG.js';

export function ChangePageButton({direction, inactiveButtonPage, changePage}) {
	return (
		<li className={"page-item" + (inactiveButtonPage ? " disabled" : '')}>
			<a className="page-link" onClick={() => {if (!inactiveButtonPage) changePage()}}>
				<span><ChangePageButtonSVG direction={direction} /></span>
			</a>
		</li>
	);
}