'use strict';

const useSelector = ReactRedux.useSelector;

export function ContainerImage({errors}) {

	return (
		<div className="itemPage__container-img">
			<img className="itemPage__details-img" src={params.image ? params.image : null} />
			<AddImageButton errors={errors} />
			<ImageError errors={errors} />
			<div className="itemPage__rating    itemPage__border-animation">
				<ItemRatingTriangle />
				<label className="itemPage__label-image" htmlFor="image"></label>
			</div>
			<ImageInputs />
		</div>
	);
}

function ItemRatingTriangle(props) {

	const imgDimension = "55vh";

	const rating = useSelector(state => state.rating);
	const colorForRating = useSelector(state => state.color);
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

function ImageError({errors}) {
	return (
		<div className="itemPage__img-error">{errors.imageError ? errors.imageError.msg : null}</div>
	);
}

function ImageInputs(props) {

	const handleChangeImage = function(event) {
		readURL(event.target);
		document.getElementById("image-validation").value = "true";
		document.getElementsByClassName("itemPage__img-error")[0].style.display = "none";
		document.getElementsByClassName("bi-file-earmark-image")[0].style.display = "none";
	};

	return (
		<div>
			<input onChange={handleChangeImage} type="file" id="image" name="image" hidden></input>
			<input type="text" id="image-validation" name="image-validation" defaultValue="false" hidden></input>
		</div>
	);
}

function AddImageButton({errors}) {
	
	const buttonStyle = {
		position: "absolute"
	}

	if (errors.imageError || (params.form && params.form.ID)) {
		buttonStyle.display = "none";
	}
	
	return (
		<svg width="20%" height="20%" viewBox="0 0 16 16" style={buttonStyle} className="bi bi-file-earmark-image" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" d="M12 16a2 2 0 0 0 2-2V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8zM3 2a1 1 0 0 1 1-1h5.5v2A1.5 1.5 0 0 0 11 4.5h2V10l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"/>
			<path fillRule="evenodd" d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
		</svg>
	);
}

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function(e) {
			document.getElementsByClassName("itemPage__details-img")[0].src = reader.result;
		}

		reader.readAsDataURL(input.files[0]); // convert to base64 string -> for browser to be able to show the image
	}
}