'use strict';

import {SearchBar} from '../../layout/SearchBar/SearchBar.js';
import {Pagination} from '../../layout/Pagination/Pagination.js';
import {SearchMessage} from './SearchMessage.js';
import {setSearchField} from '../../../redux/actions/searchActions.js';
import {fetchItemsToShow, changeURL, changeURLPageReset} from './helpers.js';

const useState = React.useState;
const useEffect = React.useEffect;
const useSelector = ReactRedux.useSelector;

export function ShowItemsPage(props) {
	return (
		<div className="showItems__mainContent">
			
			<SearchBar />
			<Options />
			
		</div>
	);
}

function Options(props) {

	const useDispatch = ReactRedux.useDispatch();
	const [items, setItems] = useState({data: null, changeable: false});

	useEffect(() => fetchItemsToShow(setItems, useDispatch), []);

	
	// These variables can be modified from another part of the application
	const page = useSelector(state => state.search.page);
	const search = useSelector(state => state.search.search);
	const category = useSelector(state => state.search.category);

	useEffect(() => changeURLPageReset(items.changeable, {search, category}), [search, category]);
	useEffect(() => changeURL(items.changeable, {search, category, page}), [page]);
	

	return (
		<div className="showItems__options">
			<SearchMessage />
			{items.data}
			<Pagination />
		</div>
	);
}