'use strict';

export function Categories(props) {

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