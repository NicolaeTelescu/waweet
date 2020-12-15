'use strict';

import {handleChangeRating, setRatingItem} from './helpers.js';

const useSelector = ReactRedux.useSelector;
const useEffect = React.useEffect;

export function Rating({item}) {

	const useDispatch = ReactRedux.useDispatch();

	const rating = useSelector(state => state.rating.rating);
	const textForRating = useSelector(state => state.rating.text);
	const colorForRating = useSelector(state => state.rating.color);

	useEffect(() => setRatingItem(item, useDispatch), []);

	return (
		<div>
			<div className="itemPage__details-text-category">Rating:</div>
			<div className="itemPage__details-text-value"><span style={{backgroundColor: colorForRating}}>{textForRating}</span></div>
			<input className="itemPage__range custom-range" name="rating" type="range" onChange={(e) => handleChangeRating(e, useDispatch)} min="0" max="100" value={rating}></input>
		</div>
	);
}