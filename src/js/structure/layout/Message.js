'use strict';

export function Message(props) {
	var message = '';
	var className = '';

	if (params.success) {
		message = params.success;
		className = 'success';
	}
	/*
	else if(params.errors) {
		message = params.errors.map((item, index) => 
			<span key={index}>{item.msg}</span>
		);
		className = 'danger';
	}
	*/
	else return null;
	
	setTimeout(() => {
		$('.alert').alert('close');
	}, 5000);
	
	return (
		<div className={"home__message alert alert-" + className + " fade show"} role="alert">
				
			<span>{message}</span>
			<button type="button" className="close" data-dismiss="alert" style={{marginLeft: "20px"}} aria-label="Close">
				<span aria-hidden="true">
					<RejectButton />
				</span>
			</button>
			
		</div>
	)
}

function RejectButton(props) {
	return (
		<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
		</svg>
	);
}