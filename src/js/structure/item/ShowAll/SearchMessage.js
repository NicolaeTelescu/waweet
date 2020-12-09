'use strict';

const useSelector = ReactRedux.useSelector;

export function SearchMessage(props) {

	const search = useSelector(state => state.search.search);
	const totalElements = useSelector(state => state.search.totalElements);
	
	let searchMessage = search ? `You searched for '${search}':` : null;
	let noElementFound = totalElements ? null : 'No element found!';

	return (
		<div>
			<div className="showItems__item__search-message">
				{searchMessage}
			</div>
			<div>
				{noElementFound}
			</div>
		</div>
	);
}