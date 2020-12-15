'use strict';

import {RejectButton, closeMessageTimeout, fetchMessage} from './helpers.js';

const useState = React.useState;
const useEffect = React.useEffect;

export function Message(props) {
	
	const [message, setMessage] = useState('');
	useEffect(() => fetchMessage(setMessage), []);

	if (!message) return null;

	closeMessageTimeout();
	
	return (
		<div className={"showItems__message alert alert-success fade show"} role="alert">
			<span>{message}</span>
			<button type="button" className="close" data-dismiss="alert" style={{marginLeft: "20px"}} aria-label="Close">
				<span aria-hidden="true">
					<RejectButton />
				</span>
			</button>
		</div>
	);
}