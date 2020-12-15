'use strict';

import {ContainerImage} from '../layout/ContainerImage/ContainerImage.js';
import {ContainerText} from '../layout/ContainerText/ContainerText.js';
import {sendForm, getItemFetch, handleChange} from './helpers.js';

const useState = React.useState;
const useEffect = React.useEffect;

export function EditItemPage(props) {

	const [item, setItem] = useState(false);
	const [errors, setErrors] = useState({});

	useEffect(() => getItemFetch(setItem), []);

	if (!item) return (<div className="itemPage__container"></div>);

	return (
		<form className="itemPage__container" id="itemForm" encType="multipart/form-data">
			<div className="itemPage__details">
				<ContainerImage item={item} errors={errors} />
				<ContainerText item={item} errors={errors} handleChange={(e) => handleChange(e, item, setItem)} sendForm={() => sendForm('edit/' + item.slug, setErrors)} />
			</div>
		</form>
	);
}