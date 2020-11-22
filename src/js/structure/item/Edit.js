'use strict';

import {ContainerImage} from './layout/ContainerImage.js';
import {ContainerText} from './layout/ContainerText.js';

const useEffect = React.useEffect;

export function EditItemPage(props) {
	let errors = {};
	
	if (params.errors) {
		errors = {
			imageError: params.errors.find(element => element.param === 'image-validation'),
			titleError: params.errors.find(element => element.param === 'title'),
			categoryError: params.errors.find(element => element.param === 'category')
		}
	}

	params.image = '/images/eating/' + params.form.ID + '.jpg';

	return (
		<form className="itemPage__container" id="itemForm" action={"/item/edit/" + params.form.slug} method="post" encType="multipart/form-data" runat="server">
			<div className="itemPage__details">
				<ContainerImage errors={errors} />
				<ContainerText errors={errors} />
			</div>
		</form>
	);
}