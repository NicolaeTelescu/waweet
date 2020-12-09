'use strict';

const useSelector = ReactRedux.useSelector;

export function ItemRatingTriangle(props) {

	const imgDimension = "55vh";

	const rating = useSelector(state => state.rating.rating);
	const colorForRating = useSelector(state => state.rating.color);
	const ratingModified = Math.floor(rating / 10) + ',' + rating % 10;

	const triangleStyle = {
		borderRight: "calc(" + imgDimension + "/4) solid " + colorForRating,
		borderTop: "calc(" + imgDimension + "/4) solid " + colorForRating,
	}

	return (
		<div className="itemPage__rating-triangle" style={triangleStyle}>
			<div className="itemPage__rating-number">{ratingModified}</div>
		</div>
	);
}