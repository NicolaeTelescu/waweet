'use strict';

import {ContainerImage} from './layout/ContainerImage.js';
import {ContainerText} from './layout/ContainerText.js';

const useEffect = React.useEffect;

export function AddItemPage(props) {

	let errors = {};
	
	if (params.errors) {
		errors = {
			imageError: params.errors.find(element => element.param === 'image-validation'),
			titleError: params.errors.find(element => element.param === 'title'),
			categoryError: params.errors.find(element => element.param === 'category')
		}
	}

	params.image = '';
	

	return (
		<form className="itemPage__container" id="itemForm" action="/items/add" method="post" encType="multipart/form-data" runat="server">
			<div className="itemPage__details">
				<ContainerImage errors={errors} />
				<ContainerText errors={errors} />
			</div>
		</form>
	);
}