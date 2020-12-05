import { ShowItemPage } from './Show.js';
import { AddItemPage } from './Add.js';
import { EditItemPage } from './Edit.js';
import { ShowItemsPage } from './ShowAll.js';

var Switch = ReactRouterDOM.Switch;
var Route = ReactRouterDOM.Route;

export function PackItemPages(props) {
	var _ReactRouterDOM$useRo = ReactRouterDOM.useRouteMatch(),
	    path = _ReactRouterDOM$useRo.path;

	return React.createElement(
		Switch,
		null,
		React.createElement(Route, { path: path + "/", exact: true, component: ShowItemsPage }),
		React.createElement(Route, { path: path + "/add", component: AddItemPage }),
		React.createElement(Route, { path: path + "/show/:itemID", component: ShowItemPage }),
		React.createElement(Route, { path: path + "/edit/:itemID", component: EditItemPage })
	);
}