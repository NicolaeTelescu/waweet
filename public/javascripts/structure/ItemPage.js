'use strict';

var useParams = ReactRouterDOM.useParams;

export function ItemPage(props) {
	var item = params[0];

	var ratings = ['Disgusting', 'Very bad', 'Not good at all', 'I prefer something else', 'So and so', 'It could be better', 'Acceptable', 'Good', 'Delicious', 'Very tasty', 'Perfect'];
	var ratingColors = ["#7a0000", "#a30000", "#e00000", "#ff5e00", "#ff9900", "#fff200", "#f6ff00", "#e3fc03", "#c2fc03", "#6fff00", "#00ff22"];
	var ratingCategory = Math.floor(item.rating / 10);
	var textForRating = ratings[ratingCategory];
	var ratingModified = Math.floor(item.rating / 10) + ',' + item.rating % 10;

	var myStyle = {
		backgroundColor: ratingColors[ratingCategory]
	};

	var imgDimension = "55vh";
	var triangleStyle = {
		borderRight: "calc(" + imgDimension + "/4) solid " + ratingColors[ratingCategory],
		borderTop: "calc(" + imgDimension + "/4) solid " + ratingColors[ratingCategory]
	};

	return React.createElement(
		'div',
		{ className: 'itemPage__container' },
		React.createElement(
			'div',
			{ className: 'itemPage__details' },
			React.createElement(
				'div',
				{ style: { display: "flex", flexGrow: "1" } },
				React.createElement('img', { className: 'itemPage__details-img', src: "images/eating/" + item.ID + ".jpg" }),
				React.createElement(
					'div',
					{ className: 'itemPage__rating    itemPage__border-animation' },
					React.createElement(
						'div',
						{ className: 'itemPage__rating-triangle', style: triangleStyle },
						React.createElement(
							'div',
							{ className: 'itemPage__rating-number' },
							ratingModified
						)
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'itemPage__details-text' },
				React.createElement(
					'div',
					{ className: 'itemPage__title' },
					React.createElement(
						'h1',
						null,
						item.title
					)
				),
				React.createElement(
					'div',
					{ className: 'itemPage__details-text-category' },
					'Category:'
				),
				React.createElement(
					'div',
					{ className: 'itemPage__details-text-value' },
					item.category
				),
				React.createElement(
					'div',
					{ className: 'itemPage__details-text-category' },
					'Rating:'
				),
				React.createElement(
					'div',
					{ className: 'itemPage__details-text-value' },
					React.createElement(
						'span',
						{ style: myStyle },
						textForRating
					)
				)
			)
		)
	);
}