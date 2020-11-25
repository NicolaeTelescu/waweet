'use strict';

import {SearchingBar} from './components/SearchingBar.js';
import {Item} from './components/Home_Item.js';
import {Pagination} from './layout/Pagination.js';

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
	const page = useSelector(state => state.pagination.page);
	const limit = useSelector(state => state.pagination.limit);

	useEffect(() => {
		const data = params.items.concat(params.items);
	
		const itemsToShow = data
			.filter((el, index) => {
				if (index >= limit * (page - 1) && index < limit * page)
					return true;
			})
			.map((el, index) => (
				<Item key={index} props={el} />
			));
		setItems(itemsToShow);	
	}, [page]);
	

	return (
		<div className="home_options">
			<SearchMessage />
			{items}
			<Pagination useDispatch={useDispatch} />
		</div>
	);
}

function SearchMessage(props) {
	
	if (!params.search) return null;

	return (
		<div className="home__item__search-message">
			{params.search}
		</div>
	);
}