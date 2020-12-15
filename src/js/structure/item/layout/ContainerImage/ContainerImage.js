'use strict';

import {ItemRatingTriangle} from './ItemRatingTriangle.js';
import {ImageFile} from './ImageFile.js';
import {ImageError, AddImageButton} from './helpers.js';

export function ContainerImage({item, errors}) {
	return (
		<div className="itemPage__container-img">
			<div className="itemPage__details-img-border"></div>
			<img className="itemPage__details-img" src={item.ID ? '/images/eating/' + item.ID + '.jpg' : null} />
			<AddImageButton item={item} errors={errors} />
			<ImageError errors={errors} />
			<div className="itemPage__rating    shadow">
				<ItemRatingTriangle />
				<label className="itemPage__label-image" htmlFor="image"></label>
			</div>
			<ImageFile />
		</div>
	);
}