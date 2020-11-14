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
				<CategoryButton name="All products" href="/" />
			</div>
		);
	}
}

function CategoryButton(props) {
	return (
		<a href={props.href}><button type="button" className="btn btn-warning header__categoryButton">{props.name}</button></a>
	);
}