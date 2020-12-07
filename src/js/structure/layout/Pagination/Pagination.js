'use strict';

import {setSearchField} from '../../../redux/actions/searchActions.js';
import {ChangePageButton} from './ChangePageButton.js';

const useSelector = ReactRedux.useSelector;

export function Pagination(props) {

	const useDispatch = ReactRedux.useDispatch();

	let labels = [];

	const page = useSelector(state => state.search.page);
	const limit = useSelector(state => state.search.limit);
	const totalElements = useSelector(state => state.search.totalElements);
	const totalPages = Math.ceil(totalElements / limit);

	if (totalPages == 0) return null;
	

	const firstPage = page == 1 ? true : false;
	const lastPage = page == totalPages ? true : false;
	const betweenPages = (firstPage || lastPage) ? false : true;

	if (totalPages < 3) {
		for (let i = 1; i <= totalPages; i++) {
			labels.push(i);
		}
	}
	else if (firstPage) labels = [1, 2, 3];
	else if (lastPage) labels = [totalPages - 2, totalPages - 1, totalPages];
	else if (betweenPages) labels = [page - 1, page, page + 1];

	const buttons = labels.map((el, index) => (
		<li className={"page-item" + ((page == labels[index]) ? " active" : '')} key={index}>
			<a className="page-link" onClick={() => {goToPage(labels[index])}}>
				{labels[index]}
			</a>
		</li>
	));

	const goToPage = (page) => {
		useDispatch(setSearchField({type: 'PAGE', payload: page}));
	};

	return (
		<nav className="showItems__pagination-nav">
			<ul className="pagination">
				<ChangePageButton direction='begin' inactivePage={firstPage} nextPage={1} goToPage={goToPage} />
				<ChangePageButton direction='left' inactivePage={firstPage} nextPage={page - 1} goToPage={goToPage} />

				{buttons}
				
				<ChangePageButton direction='right' inactivePage={lastPage} nextPage={page + 1} goToPage={goToPage} />
				<ChangePageButton direction='end' inactivePage={lastPage} nextPage={totalPages} goToPage={goToPage} />
			</ul>
		</nav>
	);
}