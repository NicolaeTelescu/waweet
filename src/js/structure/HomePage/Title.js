'use strict';

export function Title(props) {
	return (
		<div className="home__title">
			<h1>What are we eating <span className="showItems__todayTitle" style={{color: "red"}}>today</span>?</h1>
		</div>
	);
}