import { ShowItemPage } from './Show.js';
import { AddItemPage } from './add/Add.js';
import { EditItemPage } from './Edit.js';

var Switch = ReactRouterDOM.Switch;
var Route = ReactRouterDOM.Route;

export function AllItemPages(props) {
	var _ReactRouterDOM$useRo = ReactRouterDOM.useRouteMatch(),
	    path = _ReactRouterDOM$useRo.path;

	return React.createElement(
		Switch,
		null,
		React.createElement(Route, { path: path + "/add", component: AddItemPage }),
		React.createElement(Route, { path: path + "/show/:itemID", component: ShowItemPage }),
		React.createElement(Route, { path: path + "/edit/:itemID", component: EditItemPage })
	);
}