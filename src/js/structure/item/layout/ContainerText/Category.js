'use strict';

import {getFetchCategories} from './../../Methods/helpers.js';

const useState = React.useState;
const useEffect = React.useEffect;

export function Category({handleChange, item, errors}) {

	const [categories, setCategories] = useState([]);
	useEffect(() => getFetchCategories(setCategories), []);

	const categoryOptions = categories.map((category, index) => (
		<option key={index} value={category.name}>{category.name}</option>
	));

	if (categories.length === 0) return null;

	return (
		<div>
			<div className="itemPage__details-text-category">
				<span>Category:</span>
				<span className="itemPage__details-text-value-error">{errors.categoryError ? errors.categoryError.msg : null}</span>
			</div>
			<div className="itemPage__details-text-value">
				<select className="custom-select" name="category" value={item.category} onChange={handleChange}>
					<option defaultValue>- Set the category -</option>
					{categoryOptions}
				</select>
			</div>
		</div>
	);
}