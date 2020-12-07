'use strict';

const useSelector = ReactRedux.useSelector;

export function SearchMessage(props) {

	const search = useSelector(state => state.search.search);
	const totalElements = useSelector(state => state.search.totalElements);
	
	let searchMessage = `You searched for '${search}':`;
	let noElementFound = null;

	if (!search) searchMessage = null;
	if (!totalElements) noElementFound = 'No element found!';

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