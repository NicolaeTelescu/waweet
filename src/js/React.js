'use strict';

import {Header} from './structure/Header.js';
import {MainContent} from './structure/MainContent.js';
import {ItemPage} from './structure/ItemPage.js';
import {Footer} from './structure/Footer.js';


const Router = ReactRouterDOM.BrowserRouter;
const Switch = ReactRouterDOM.Switch;
const Route = ReactRouterDOM.Route;


export class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = { };
	}
	
	render() {
		return (
			<div className="flex-container">
				
				<Header />
				<Switch>
					<Route exact path="/">
						<MainContent />
					</Route>
					<Route exact path="/:itemID">
						<ItemPage />
					</Route>
				</Switch>
				<Footer />
			
			</div>
		);
	}
}

let domContainer = document.querySelector('#react_container');
ReactDOM.render(<Router><App /></Router>, domContainer);