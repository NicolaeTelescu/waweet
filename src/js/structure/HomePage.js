'use strict';

import {SearchingBar} from './components/SearchingBar.js';
import {Item} from './components/Home_Item.js';
import {Pagination} from './layout/Pagination.js';
import {setSearchField} from './../redux/actions/searchActions.js';

const useState = React.useState;
const useEffect = React.useEffect;
const useSelector = ReactRedux.useSelector;

export function HomePage(props) {
	return (
		<div className="home__mainContent">
			
			<Title />
			<SearchingBar />
			<Options />
			
		</div>
	);
}

function Title(props) {
	return (
		<div className="title">
			<h1>What are we eating <span className="home__todayTitle" style={{color: "red"}}>today</span>?</h1>
		</div>
	);
}

function Options(props) {
	const [items, setItems] = useState([]);

	const useDispatch = ReactRedux.useDispatch();
	const page = useSelector(state => state.search.page);
	const limit = useSelector(state => state.search.limit);
	const search = useSelector(state => state.search.search);
	const category = useSelector(state => state.search.category);

	useEffect(() => {

		fetch(`http://www.localhost:3000/items?search=${search}&category=${category}&page=${page}&limit=${limit}`)
			.then(response => response.json())
			.then(data => {

				useDispatch(setSearchField({type: 'TOTAL_ELEMENTS', payload: data.totalElements}));

				const itemsToShow = data.items
					.map((el, index) => (
						<Item key={index} props={el} />
					));
				setItems(itemsToShow);
			});
			
	}, [search, category, page]);
	

	return (
		<div className="home_options">
			<SearchMessage />
			{items}
			<Pagination useDispatch={useDispatch} />
		</div>
	);
}

function SearchMessage(props) {

	const search = useSelector(state => state.search.search);
	const totalElements = useSelector(state => state.search.totalElements);
	
	let searchMessage = `You searched for '${search}':`;
	let noElementFound = null;

	if (!search) searchMessage = null;
	if (!totalElements) noElementFound = 'No element found!';

	return (
		<div>
			<div className="home__item__search-message">
				{searchMessage}
			</div>
			<div>
				{noElementFound}
			</div>
		</div>
	);
}