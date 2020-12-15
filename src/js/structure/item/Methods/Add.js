'use strict';

import {ContainerImage} from '../layout/ContainerImage/ContainerImage.js';
import {ContainerText} from '../layout/ContainerText/ContainerText.js';
import {sendForm, handleChange} from './helpers.js';

const useState = React.useState;
const useEffect = React.useEffect;

export function AddItemPage(props) {
	
	const [item, setItem] = useState({title: "", category: ""});
	const [errors, setErrors] = useState({});

	return (
		<form className="itemPage__container" id="itemForm" encType="multipart/form-data">
			<div className="itemPage__details">
				<ContainerImage item={item} errors={errors} />
				<ContainerText item={item} errors={errors} handleChange={(e) => handleChange(e, item, setItem)} sendForm={() => sendForm('add', setErrors)} />
			</div>
		</form>
	);
}