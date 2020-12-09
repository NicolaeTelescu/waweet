'use strict';

import {ItemRating} from './ItemRating.js';
import {ItemText} from './ItemText.js';
import {ItemBorder} from './ItemBorder.js';

export function Item({props}) {
	const {ID, title, category, rating, slug} = props;

	return (
		<div className="showItems__item">
			
			<ItemBorder />
			<img className="showItems__item__img" src={"/images/eating-small/" + ID + "-small.jpg"}></img>
			
			<a className="showItems__item__linkTo" href={'/items/show/' + slug}>
				<ItemRating rating={rating} />
			</a>
			<ItemText title={title} category={category} slug={slug} />
			
		</div>
	)
}