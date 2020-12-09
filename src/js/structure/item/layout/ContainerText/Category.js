'use strict';

export function Category({handleChange, item, errors}) {

	const categories = params.categories.map((category, index) => (
		<option key={index} value={category.name}>{category.name}</option>
	));

	return (
		<div>
			<div className="itemPage__details-text-category">
				<span>Category:</span>
				<span className="itemPage__details-text-value-error">{errors.categoryError ? errors.categoryError.msg : null}</span>
			</div>
			<div className="itemPage__details-text-value">
				<select className="custom-select" name="category" value={item.category} onChange={handleChange}>
					<option defaultValue>- Set the category -</option>
					{categories}
				</select>
			</div>
		</div>
	);
}