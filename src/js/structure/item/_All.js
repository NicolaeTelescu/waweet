import {ShowItemPage} from './Show.js';
import {AddItemPage} from './add/Add.js';
import {EditItemPage} from './Edit.js';

const Switch = ReactRouterDOM.Switch;
const Route = ReactRouterDOM.Route;


export function AllItemPages(props) {
	const {path} = ReactRouterDOM.useRouteMatch();

	return (
		<Switch>
			<Route path={path + "/add"} component={AddItemPage} />
			<Route path={path + "/show/:itemID"} component={ShowItemPage} />
			<Route path={path + "/edit/:itemID"} component={EditItemPage} />
		</Switch>
	);
}