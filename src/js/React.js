'use strict';

import {Header} from './structure/layout/Header.js';
import {Footer} from './structure/layout/Footer.js';
import {Message} from './structure/layout/Message.js';
import {HomePage} from './structure/HomePage.js';
import {AllItemPages} from './structure/item/_All.js';
import {allReducers} from './redux/reducers/index.js';


const Provider = ReactRedux.Provider;

const Router = ReactRouterDOM.BrowserRouter;
const Switch = ReactRouterDOM.Switch;
const Route = ReactRouterDOM.Route;


function App(props) {
	return (
		<div className="flex-container">
			
			<Header />
			<Message />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/item" component={AllItemPages} />
			</Switch>
			<Footer />
		
		</div>
	);
}

// Create store
let store = Redux.createStore(allReducers);

let domContainer = document.querySelector('#react_container');
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	domContainer
);