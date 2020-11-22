'use strict';

import { ContainerImage } from './layout/ContainerImage.js';
import { ContainerText } from './layout/ContainerText.js';

var useEffect = React.useEffect;

export function AddItemPage(props) {

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

	params.image = '';

	return React.createElement(
		'form',
		{ className: 'itemPage__container', id: 'itemForm', action: '/item/add', method: 'post', encType: 'multipart/form-data', runat: 'server' },
		React.createElement(
			'div',
			{ className: 'itemPage__details' },
			React.createElement(ContainerImage, { errors: errors }),
			React.createElement(ContainerText, { errors: errors })
		)
	);
}