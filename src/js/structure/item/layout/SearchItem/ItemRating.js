'use strict';

export function ItemRating({rating}) {
	const ratingModified = (rating < 100) ? Math.floor(rating / 10) + "," + rating % 10 : 10;
	const ratingColors = ["#7a0000", "#a30000", "#e00000", "#ff5e00", "#ff9900", "#fff200", "#f6ff00", "#e3fc03", "#c2fc03", "#6fff00", "#00ff22"];
	const triangleColor = ratingColors[Math.floor(rating / 10)];
	const myStyle = {
		borderRight: "25px solid " + triangleColor,
		borderTop: "25px solid " + triangleColor
	};

	return (
		<div className="showItems__item__rating    shadow">
			<div className="showItems__item__rating-triangle" style={myStyle}>
				<div className="showItems__item__rating-number">{ratingModified}</div>
			</div>
		</div>
	);
}