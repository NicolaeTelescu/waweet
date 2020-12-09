'use strict';

import {RejectButton, closeMessageTimeout, getMessage} from './helpers.js';

export function Message(props) {
	
	const {message, className} = getMessage();

	if (!message) return null;
	
	closeMessageTimeout();
	
	return (
		<div className={"showItems__message alert alert-" + className + " fade show"} role="alert">
			<span>{message}</span>
			<button type="button" className="close" data-dismiss="alert" style={{marginLeft: "20px"}} aria-label="Close">
				<span aria-hidden="true">
					<RejectButton />
				</span>
			</button>
		</div>
	);
}