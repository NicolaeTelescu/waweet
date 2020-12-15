'use strict';

function getFetchErrors(fetchErrors) {
	if (fetchErrors) {
		return {
			imageError: fetchErrors.find(element => element.param === 'image-validation'),
			titleError: fetchErrors.find(element => element.param === 'title'),
			categoryError: fetchErrors.find(element => element.param === 'category')
		}
	}
	
	return {};
}

export function sendForm(type, setErrors) {
			
	const formData = new FormData(document.getElementById("itemForm"));

	fetch('http://www.localhost:3000/items/' + type, {
		method: 'POST',
		credentials: 'include',
		body: formData
	})
	.then(response => {
		if (!response.ok) {
			response.text()
				.then(text => {
					const errors = getFetchErrors(JSON.parse(text));
					setErrors(errors);
				});
		}
		else {
			setErrors({});
			window.location.href = 'http://www.localhost:3000/items?receivedMessage=yes';
		}
	})
	.catch(err => console.error('Error: ', err));

}

function getItemSlug() {
	return (window.location.href).split('/').pop();
}

export function getItemFetch(setItem) {

	const itemSlug = getItemSlug();
	fetch('http://www.localhost:3000/item/' + itemSlug)
		.then(response => {
			if (!response.ok) {
				throw new Error('Something bad happened');
			}
			else return response.json();
		})
		.then(result => setItem(result))
		.catch(err => console.log(err));
	
}

export function getFetchCategories(setCategories) {
	fetch('http://www.localhost:3000/categories/all')
		.then(response => response.json())
		.then(categories => setCategories(categories));
}

export function handleChange(event, entity, setEntity) {
	setEntity({
		...entity,
		[event.target.name]: event.target.value
	});
}