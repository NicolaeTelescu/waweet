'use strict';

import {setRating} from '../../../redux/actions/ratingActions.js';
import {getItemFetch} from './helpers.js';

const useState = React.useState;
const useEffect = React.useEffect;
const useSelector = ReactRedux.useSelector;

export function ShowItemPage(props) {

	const [item, setItem] = useState({rating: 0});

	useEffect(() => getItemFetch(setItem), []);

	const useDispatch = ReactRedux.useDispatch();
	useDispatch(setRating(item.rating));
	
	const textForRating = useSelector(state => state.rating.text);
	const colorForRating = useSelector(state => state.rating.color);
	const ratingModified = Math.floor(item.rating / 10) + ',' + (item.rating % 10);

	const imgDimension = "55vh";
	const triangleStyle = {
		borderRight: "calc(" + imgDimension + "/4) solid " + colorForRating,
		borderTop: "calc(" + imgDimension + "/4) solid " + colorForRating,
	};

	if (!item.ID) return (<div className="itemPage__container"></div>);

	return (
		<div className="itemPage__container">
			<div className="itemPage__details">
				<div style={{display: "flex", flexGrow: "1"}}>
					<div className="itemPage__details-img-border"></div>
					<img className="itemPage__details-img" src={"/images/eating/" + item.ID + ".jpg"} />
					<div className="itemPage__rating    shadow">
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
					<div className="itemPage__details-text-value"><span style={{backgroundColor: colorForRating}}>{textForRating}</span></div>
				</div>
			</div>
		</div>
	);
}