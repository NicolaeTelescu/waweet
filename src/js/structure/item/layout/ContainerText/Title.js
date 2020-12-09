'use strict';

export function Title({item, handleChange, errors}) {
	return (
		<div>
			<div className="itemPage__details-text-category">
				<span>Title:</span>
				<span className="itemPage__details-text-value-error">{errors.titleError ? errors.titleError.msg : null}</span>
			</div>
			<div className="itemPage__details-text-value">
				<input className="form-control" name="title" type="text" maxLength="25" onChange={handleChange} placeholder="Product title" value={item.title}></input>
			</div>
		</div>
	);
}