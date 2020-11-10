'use strict';

export class Header extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = { };
	}
	
	render() {
		return (		
			<div className="header">
				<CategoryButton name="Breakfast" />
				<CategoryButton name="Lunch" />
				<CategoryButton name="Dinner" />
				<CategoryButton name="Drinks" />
			</div>
		);
	}
}

function CategoryButton(props) {
	return (
		<button type="button" className="btn btn-warning categoryButton">{props.name}</button>
	);
}