'use strict';

import {SearchingBar} from './SearchingBar.js';

export class MainContent extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = { };
	}
	
	render() {
		return (		
			<div className="mainContent">
				
				<Title />
				<SearchingBar />
				<Options />
				
			</div>
		);
	}
}

function Title(props) {
	return (
		<div className="title">
			<h1>What are we eating <span style={{color: "red"}}>today</span>?</h1>
		</div>
	);
}

function Options(props) {
	return (
		<div className="Options">
			Nothing for now
		</div>
	);
}