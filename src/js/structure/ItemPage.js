'use strict';

const useParams = ReactRouterDOM.useParams;

export function ItemPage(props) {
	const item = params[0];

	const ratings = ['Disgusting', 'Very bad', 'Not good at all', 'I prefer something else', 'So and so', 'It could be better', 'Acceptable', 'Good', 'Delicious', 'Very tasty', 'Perfect'];
	const ratingColors = ["#7a0000", "#a30000", "#e00000", "#ff5e00", "#ff9900", "#fff200", "#f6ff00", "#e3fc03", "#c2fc03", "#6fff00", "#00ff22"];
	const ratingCategory = Math.floor(item.rating / 10)
	const textForRating = ratings[ratingCategory];
	const ratingModified = Math.floor(item.rating / 10) + ',' + (item.rating % 10);

	const myStyle = {
		backgroundColor: ratingColors[ratingCategory]
	}

	const imgDimension = "55vh";
	const triangleStyle = {
		borderRight: "calc(" + imgDimension + "/4) solid " + ratingColors[ratingCategory],
		borderTop: "calc(" + imgDimension + "/4) solid " + ratingColors[ratingCategory],
	};

	return (
		<div className="itemPage__container">
			<div className="itemPage__details">
				<div style={{display: "flex", flexGrow: "1"}}>
					<img className="itemPage__details-img" src={"images/eating/" + item.ID + ".jpg"} />
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