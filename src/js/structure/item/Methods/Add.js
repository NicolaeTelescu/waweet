'use strict';

import {ContainerImage} from '../layout/ContainerImage/ContainerImage.js';
import {ContainerText} from '../layout/ContainerText/ContainerText.js';
import {getErrors} from './helpers.js';

const useEffect = React.useEffect;

export function AddItemPage(props) {
	let errors = getErrors();

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