'use strict';

import {SearchingBar} from './layout/SearchingBar.js';
import {Item} from './item/layout/SearchItem.js';
import {Pagination} from './layout/Pagination.js';
import {setSearchField} from './../redux/actions/searchActions.js';

const useState = React.useState;
const useEffect = React.useEffect;
const useSelector = ReactRedux.useSelector;

export function HomePage(props) {

	return (
		<div className="home__container">
			
			<Title />
			<Categories />
			
		</div>
	);
}

function Title(props) {
	return (
		<div className="home__title">
			<h1>What are we eating <span className="showItems__todayTitle" style={{color: "red"}}>today</span>?</h1>
		</div>
	);
}

function Categories(props) {

	const goTo = (href) => {
		window.location.href = href;
	};

	const categories = ['Breakfast', 'Lunch', 'Snack', 'Dinner'].map((el, index) => (
		<div className="home__category    shadow-lg" key={index} onClick={() => goTo(`/items?category=${el}`)}>
			<div className="home__category-label" style={{bottom: "5px", left: "6px"}}>{el}</div>
			<img className="home__category-img" style={{objectPosition: (index === 2 ? 'bottom' : '')}} src={'/images/structure/' + el + '.jpg'}></img>
		</div>
	));

	return (
		<div className="home__categories">
			{categories}
		</div>
	);
}