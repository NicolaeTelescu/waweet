'use strict';

import {ItemRatingTriangle} from './ItemRatingTriangle.js';
import {ImageFile} from './ImageFile.js';
import {ImageError, AddImageButton} from './helpers.js';

export function ContainerImage({errors}) {
	return (
		<div className="itemPage__container-img">
			<div className="itemPage__details-img-border"></div>
			<img className="itemPage__details-img" src={params.image ? params.image : null} />
			<AddImageButton errors={errors} />
			<ImageError errors={errors} />
			<div className="itemPage__rating    shadow">
				<ItemRatingTriangle />
				<label className="itemPage__label-image" htmlFor="image"></label>
			</div>
			<ImageFile />
		</div>
	);
}