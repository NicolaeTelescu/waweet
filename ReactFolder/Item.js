'use strict';

export function Item({props}) {
	const {ID, title, category, rating} = props;
	return (
		<div className="item">
			
			<img className="item-img" src={"images/eating-small/" + ID + "-small.jpg"} width="100" height="100"></img>
			<div className="item-border-animation"></div>
			<ItemRating rating={rating} />
			<ItemDetails title={title} category={category} />
			
		</div>
	)
}

function ItemRating({rating}) {
	const ratingModified = Math.floor(rating / 10) + "," + rating % 10;
	const ratingColors = ["#7a0000", "#a30000", "#e00000", "#ff5e00", "#ff9900", "#fff200", "#f6ff00", "#e3fc03", "#c2fc03", "#6fff00", "#00ff22"];
	const triangleColor = ratingColors[Math.floor(rating / 10)];
	const myStyle = {
		borderRight: "25px solid " + triangleColor,
		borderTop: "25px solid " + triangleColor
	};

	return (
		<div className="item-rating">
			<div className="item-rating-triangle" style={myStyle}>
				<div className="item-rating-number">{ratingModified}</div>
			</div>
		</div>
	);
}

function ItemDetails({title, category}) {
	return (
		<div className="item-details">
			<div className="item-details-text">
				<span className="item-title">{title}</span>
				<span>{category}</span>
			</div>
			<div className="item-details-buttons">
				<EditItemButton />
				<DeleteItemButton />
			</div>
		</div>
	);
}

function EditItemButton(props) {
	return (
		<a href="/product" className="item-button">
			<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
			</svg>
		</a>
	);
}

function DeleteItemButton(props) {
	return (
		<a href="/product" className="item-button">
			<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
				<path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
			</svg>
		</a>
	);
}