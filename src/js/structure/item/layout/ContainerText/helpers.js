'use strict';

import {setRating} from '../../../../redux/actions/ratingActions.js';

export function handleChangeRating(event, useDispatch) {
	useDispatch(setRating(event.target.value));
};

export function setRatingItem(item, useDispatch) {
	if (item.rating)
		useDispatch(setRating(item.rating));
}