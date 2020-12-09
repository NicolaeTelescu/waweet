'use strict';

export function ImageError({errors}) {
	return (
		<div className="itemPage__img-error">{errors.imageError ? errors.imageError.msg : null}</div>
	);
}

export function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function(e) {
			document.getElementsByClassName("itemPage__details-img")[0].src = reader.result;
		}

		reader.readAsDataURL(input.files[0]); // convert to base64 string -> for browser to be able to show the image
	}
}


export function AddImageButton({errors}) {

	let buttonStyle = {position: "absolute"};

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