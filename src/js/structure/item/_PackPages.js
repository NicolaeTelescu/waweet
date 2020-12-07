import {ShowItemPage} from './Show.js';
import {AddItemPage} from './Add.js';
import {EditItemPage} from './Edit.js';
import {ShowItemsPage} from './ShowAll/ShowAll.js';

const Switch = ReactRouterDOM.Switch;
const Route = ReactRouterDOM.Route;


export function PackItemPages(props) {
	const {path} = ReactRouterDOM.useRouteMatch();

	return (
		<Switch>
			<Route path={path + "/"} exact component={ShowItemsPage} />
			<Route path={path + "/add"} component={AddItemPage} />
			<Route path={path + "/show/:itemID"} component={ShowItemPage} />
			<Route path={path + "/edit/:itemID"} component={EditItemPage} />
		</Switch>
	);
}