'use strict';

import {setRating} from './../../redux/actions/ratingActions.js';

const useSelector = ReactRedux.useSelector;
const useDispatch = ReactRedux.useDispatch;

export function ShowItemPage(props) {
	const item = params[0];
	const dispatch = useDispatch()(setRating(item.rating));
	
	const textForRating = useSelector(state => state.rating.text);
	const colorForRating = useSelector(state => state.rating.color);
	const ratingModified = Math.floor(item.rating / 10) + ',' + (item.rating % 10);

	const myStyle = {
		backgroundColor: colorForRating
	}

	const imgDimension = "55vh";
	const triangleStyle = {
		borderRight: "calc(" + imgDimension + "/4) solid " + colorForRating,
		borderTop: "calc(" + imgDimension + "/4) solid " + colorForRating,
	};

	return (
		<div className="itemPage__container">
			<div className="itemPage__details">
				<div style={{display: "flex", flexGrow: "1"}}>
					<img className="itemPage__details-img" src={"/images/eating/" + item.ID + ".jpg"} />
					<div className="itemPage__rating    itemPage__border-animation">
						<div className="itemPage__rating-triangle" style={triangleStyle}>
							<div className="itemPage__rating-number">{ratingModified}</div>
						</div>
					</div>
				</div>
				<div className="itemPage__details-text">
					<div className="itemPage__title">
						<h1>{item.title}</h1>
					</div>
					<div className="itemPage__details-text-category">Category:</div>
					<div className="itemPage__details-text-value">{item.category}</div>
					<div className="itemPage__details-text-category">Rating:</div>
					<div className="itemPage__details-text-value"><span style={myStyle}>{textForRating}</span></div>
				</div>
			</div>
		</div>
	);
}