'use strict';

import { Header } from './structure/layout/Header.js';
import { Footer } from './structure/layout/Footer.js';
import { Message } from './structure/layout/Message.js';
import { HomePage } from './structure/HomePage.js';
import { AllItemPages } from './structure/item/_All.js';
import { getRating } from './redux/reducers/index.js';

var Provider = ReactRedux.Provider;

var Router = ReactRouterDOM.BrowserRouter;
var Switch = ReactRouterDOM.Switch;
var Route = ReactRouterDOM.Route;

function App(props) {
	return React.createElement(
		'div',
		{ className: 'flex-container' },
		React.createElement(Header, null),
		React.createElement(Message, null),
		React.createElement(
			Switch,
			null,
			React.createElement(Route, { exact: true, path: '/', component: HomePage }),
			React.createElement(Route, { path: '/item', component: AllItemPages })
		),
		React.createElement(Footer, null)
	);
}

// Create store
var store = Redux.createStore(getRating);

var domContainer = document.querySelector('#react_container');
ReactDOM.render(React.createElement(
	Provider,
	{ store: store },
	React.createElement(
		Router,
		null,
		React.createElement(App, null)
	)
), domContainer);