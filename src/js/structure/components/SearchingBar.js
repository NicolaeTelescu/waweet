'use strict';

const useEffect = React.useEffect;

export class SearchingBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ""};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	
	handleSubmit(event) {
		document.getElementById("searchingForm").submit();
	}
	
	handleFilter(event) {
		alert("Filter button will come soon");
	}
	
	render() {
		return (
			<form className="home__searchingBar" action="/" id="searchingForm">
				<AddItemButton />
				<div className="home__searchFields">
					<input type="text" name="search" className="form-control col-3" placeholder="Search for something" value={this.state.value} onChange={this.handleChange}></input>
					<SearchingButton onClick={this.handleSubmit} />
					<FilterButton onClick={this.handleFilter} />
				</div>
			</form>
		);
	}
}

function SearchingButton(props) {
	return (
		<div className="home__button" onClick={props.onClick}>
			<svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-search" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
				<path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
			</svg>
		</div>
	);
}

function FilterButton(props) {

	const categories = ['All categories', 'Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Snack'].map((el, index) => (
		<div className="dropdown-item" key={index}>
			<div className="form-check form-check-inline">
				<input className="form-check-input" type="radio" name="category" id={'categoryOption' + index} value={el !== 'All categories' ? el : ''} defaultChecked={el === 'All categories' ? true : false} />
				<label style={{fontSize: "14px"}} className="form-check-label" htmlFor={'categoryOption' + index}>{el}</label>
			</div>
		</div>
	));

	return (
		<div className="home__button">
			<a className="home__dropdownSVG" data-toggle="dropdown">
				<FilterButtonSVG />
			</a>
			<div className="dropdown-menu p-2">
				<div className="dropdown-header">Categories</div>
				{categories}
			</div>
		</div>
	);
}

function FilterButtonSVG(props) {
	return (
		<svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
		</svg>
	);
}

function AddItemButton(props) {
	return (
		<a className="home__button" href="/item/add">
			<svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
			</svg>
		</a>
		
	);
}