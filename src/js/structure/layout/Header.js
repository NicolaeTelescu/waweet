'use strict';

export function Header(props) {
	
	const names = ['Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Snack'];
	const buttons = names.map((el, index) => (
		<CategoryButton name={el} key={index} />
	));


	return (		
		<form className="header" id="headerForm">
			{buttons}
			<AllProductsButton />
			<input type="text" name="category" id="headerCategory" hidden />
		</form>
	);
}

function CategoryButton(props) {

	const handleClick = (event) => {
		document.getElementById("headerCategory").value = props.name.toLowerCase();
		document.getElementById("headerForm").submit();
	}

	return (
		<a onClick={handleClick}><button type="button" className="btn btn-warning header__categoryButton">{props.name}</button></a>
	);
}

function AllProductsButton(props) {
	return (
		<a href='/'><button type="button" className="btn btn-warning header__categoryButton">All products</button></a>
	);
}