'use strict';

import { ContainerImage } from './layout/ContainerImage.js';
import { ContainerText } from './layout/ContainerText.js';

var useEffect = React.useEffect;

export function EditItemPage(props) {
	var errors = {};

	if (params.errors) {
		errors = {
			imageError: params.errors.find(function (element) {
				return element.param === 'image-validation';
			}),
			titleError: params.errors.find(function (element) {
				return element.param === 'title';
			}),
			categoryError: params.errors.find(function (element) {
				return element.param === 'category';
			})
		};
	}

	params.image = '/images/eating/' + params.form.ID + '.jpg';

	return React.createElement(
		'form',
		{ className: 'itemPage__container', id: 'itemForm', action: "/items/edit/" + params.form.slug, method: 'post', encType: 'multipart/form-data', runat: 'server' },
		React.createElement(
			'div',
			{ className: 'itemPage__details' },
			React.createElement(ContainerImage, { errors: errors }),
			React.createElement(ContainerText, { errors: errors })
		)
	);
}