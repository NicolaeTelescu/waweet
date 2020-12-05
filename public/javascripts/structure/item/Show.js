'use strict';

import { setRating } from './../../redux/actions/ratingActions.js';

var useSelector = ReactRedux.useSelector;
var useDispatch = ReactRedux.useDispatch;

export function ShowItemPage(props) {

	var item = params[0];
	var dispatch = useDispatch()(setRating(item.rating));

	var textForRating = useSelector(function (state) {
		return state.rating.text;
	});
	var colorForRating = useSelector(function (state) {
		return state.rating.color;
	});
	var ratingModified = Math.floor(item.rating / 10) + ',' + item.rating % 10;

	var myStyle = {
		backgroundColor: colorForRating
	};

	var imgDimension = "55vh";
	var triangleStyle = {
		borderRight: "calc(" + imgDimension + "/4) solid " + colorForRating,
		borderTop: "calc(" + imgDimension + "/4) solid " + colorForRating
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
				React.createElement('div', { className: 'itemPage__details-img-border' }),
				React.createElement('img', { className: 'itemPage__details-img', src: "/images/eating/" + item.ID + ".jpg" }),
				React.createElement(
					'div',
					{ className: 'itemPage__rating    shadow' },
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