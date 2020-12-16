'use strict';

import {SearchBar} from '../../layout/SearchBar/SearchBar.js';
import {Pagination} from '../../layout/Pagination/Pagination.js';
import {SearchMessage} from './SearchMessage.js';
import {setSearchField} from '../../../redux/actions/searchActions.js';
import {fetchItemsToShow, changeURL, changeURLPageReset, getStateSearchParams} from './helpers.js';

const useState = React.useState;
const useEffect = React.useEffect;

export function ShowItemsPage(props) {
	return (
		<div className="showItems__mainContent">
			
			<SearchBar />
			<Items />
			
		</div>
	);
}

function Items(props) {

	const useDispatch = ReactRedux.useDispatch();
	const [items, setItems] = useState({data: null, changeable: false});

	useEffect(() => fetchItemsToShow(setItems, useDispatch), []);

	
	// These variables can be modified from another part of the application
	const {page, search, category} = getStateSearchParams();

	useEffect(() => changeURLPageReset(items.changeable, {search, category}), [search, category]);
	useEffect(() => changeURL(items.changeable, {search, category, page}), [page]);
	

	return (
		<div className="showItems__items">
			<SearchMessage />
			{items.data}
			<Pagination />
		</div>
	);
}