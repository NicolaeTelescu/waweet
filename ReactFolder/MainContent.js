'use strict';

import {SearchingBar} from './SearchingBar.js';
import {Item} from './Item.js';

const useState = React.useState;
const useEffect = React.useEffect;

export class MainContent extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = { };
	}
	
	render() {
		return (		
			<div className="mainContent">
				
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
			<h1>What are we eating <span className="todayTitle" style={{color: "red"}}>today</span>?</h1>
		</div>
	);
}

function Options(props) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/items")
			.then(response => {
				return response.json();
			})
			.then(data => {
				data = data.concat(data);
				setItems(data.map((el, index) => {
					return <Item key={index} props={el} />
				}));
			});
	}, []);
	

	return (
		<div className="Options">
			{items}
		</div>
	);
}