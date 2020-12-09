'use strict';

import {EditItemButton, DeleteItemButton} from './ButtonsSVG.js';

export function ItemText({title, category, slug}) {
	return (
		<div className="showItems__item__details    shadow">
			<div className="showItems__item__details-text">
				<span className="showItems__item__title"><a href={'/items/show/' + slug}>{title}</a></span>
				<span>{category}</span>
			</div>
			<div className="showItems__item__details-buttons">
				<EditItemButton slug={slug} />
				<DeleteItemButton slug={slug} />
			</div>
		</div>
	);
}