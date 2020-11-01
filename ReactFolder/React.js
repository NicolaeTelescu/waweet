'use strict';

import {Header} from './Header.js';
import {MainContent} from './MainContent.js';
import {Footer} from './Footer.js';

export class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = { liked: false };
	}
	
	render() {
		return (
			<div className="flex-container">
				
				<Header />
				<MainContent />
				<Footer />
			
			</div>
		);
	}
}

let domContainer = document.querySelector('#react_container');
ReactDOM.render(<App />, domContainer);