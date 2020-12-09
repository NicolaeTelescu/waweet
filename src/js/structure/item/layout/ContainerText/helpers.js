'use strict';

import {setRating} from '../../../../redux/actions/ratingActions.js';

export function handleChangeRating(event, useDispatch) {
	useDispatch(setRating(event.target.value));
};

export function setFormParams(useDispatch) {
	if (params.form)
		useDispatch(setRating(params.form.rating));
}

export function handleChange(event, entity, setEntity) {
	setEntity({
		...entity,
		[event.target.name]: event.target.value
	});
}

export function initialItemState() {
	return {
		title: params.form ? params.form.title : "",
		category: params.form ? params.form.category : "Set the category"
	};
}