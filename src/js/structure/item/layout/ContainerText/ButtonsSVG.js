'use strict';

import {getFetchErrors} from './../../Methods/helpers.js';

export function AcceptButton({sendForm}) {
	return (
		<a onClick={() => sendForm()}>
			<svg width="1em" height="1em" viewBox="0 0 16 16" className="itemPage__button__accept bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
			</svg>
		</a>
	);
}

export function RejectButton(props) {
	return (
		<a onClick={() => window.history.back()}>
			<svg width="1em" height="1em" viewBox="0 0 16 16" className="itemPage__button__reject bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
			</svg>
		</a>
	);
}