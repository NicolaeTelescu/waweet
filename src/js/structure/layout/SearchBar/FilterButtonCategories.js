'use strict';

export function FilterButtonCategories({categoryChecked, onChange}) {
	
	if (!categoryChecked) categoryChecked = 'All categories';

	const categories = ['All categories', 'Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Snack'].map((el, index) => (
		<div className="dropdown-item" key={index}>
			<div className="form-check form-check-inline">
				<input className="form-check-input" type="radio" name="category" id={'categoryOption' + index} onChange={onChange} value={el !== 'All categories' ? el : ''} defaultChecked={el === categoryChecked ? true : false} />
				<label style={{fontSize: "14px"}} className="form-check-label" htmlFor={'categoryOption' + index}>{el}</label>
			</div>
		</div>
	));
	
	return (
		<div>
			{categories}
		</div>
	);
}