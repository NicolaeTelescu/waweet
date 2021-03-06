'use strict';

export function RejectButton(props) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
		</svg>
	);
}

export function closeMessageTimeout() {
	setTimeout(() => {
		$('.alert').alert('close');
	}, 5000);
}

export function fetchMessage(setMessage) {
	if (receivedMessage() === 'yes') {

		fetch('http://www.localhost:3000/serverMessage')
			.then(response => response.text())
			.then(result => setMessage(result));
	
	}
}

function receivedMessage() {
	const url = new URL(window.location.href);
	const receivedMessageURL = url.searchParams.get('receivedMessage') ? url.searchParams.get('receivedMessage') : 'no';
	
	return receivedMessageURL;
}