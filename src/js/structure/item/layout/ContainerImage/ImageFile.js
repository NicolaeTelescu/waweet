'use strict';

import {readURL} from './helpers.js';

export function ImageFile(props) {
	return (
		<div>
			<input onChange={handleChangeImage} type="file" id="image" name="image" hidden></input>
			<input type="text" id="image-validation" name="image-validation" defaultValue="false" hidden></input>
		</div>
	);
}

function handleChangeImage(event) {
	readURL(event.target);
	document.getElementById("image-validation").value = "true";
	document.getElementsByClassName("itemPage__img-error")[0].style.display = "none";
	document.getElementsByClassName("bi-file-earmark-image")[0].style.display = "none";
}