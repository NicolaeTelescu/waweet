'use strict';

import {Header} from './structure/layout/Header/Header.js';
import {Footer} from './structure/layout/Footer/Footer.js';
import {Message} from './structure/layout/Message/Message.js';
import {HomePage} from './structure/HomePage/HomePage.js';
import {PackItemPages} from './structure/item/_PackPages.js';
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
				<Route path="/" exact component={HomePage} />
				<Route path="/items" component={PackItemPages} />
			</Switch>
			<Footer />
		
		</div>
	);
}

// Create store
const store = Redux.createStore(allReducers);

const domContainer = document.querySelector('#react_container');
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	domContainer
);