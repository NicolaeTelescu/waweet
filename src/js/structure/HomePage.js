'use strict';

import {SearchingBar} from './components/SearchingBar.js';
import {Item} from './components/Home_Item.js';

const useState = React.useState;
const useEffect = React.useEffect;

export class HomePage extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = { };
	}
	
	render() {
		return (		
			<div className="home__mainContent">
				
				<Title />
				<SearchingBar />
				<Options />
				
			</div>
		);
	}
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


	useEffect(() => {
		const data = params.items.concat(params.items);
		
		setItems(data.map((el, index) => {
			return <Item key={index} props={el} />
		}));
	}, []);
	

	return (
		<div className="home_options">
			<SearchMessage />
			{items}
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