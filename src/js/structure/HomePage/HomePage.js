'use strict';

import {Title} from './Title.js';
import {Categories} from './Categories.js';

export function HomePage(props) {

	return (
		<div className="home__container">
			
			<Title />
			<Categories />
			
		</div>
	);
}