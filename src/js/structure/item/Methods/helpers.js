'use strict';

export function getErrors() {
	if (params.errors) {
		return {
			imageError: params.errors.find(element => element.param === 'image-validation'),
			titleError: params.errors.find(element => element.param === 'title'),
			categoryError: params.errors.find(element => element.param === 'category')
		}
	}
	
	return {};
}