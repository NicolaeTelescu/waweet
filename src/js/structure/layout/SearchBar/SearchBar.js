'use strict';

import {FilterButton} from './FilterButton.js';
import {AddItemButton, SearchButton} from './ButtonsSVG.js';
import {initStateSearchBar, handleChange, handleSubmit, onKeyDown} from './helpers.js';

const useState = React.useState;
const useSelector = ReactRedux.useSelector;

export function SearchBar(props) {

	const [searchBar, setSearchBar] = useState(initStateSearchBar());

	const useDispatch = ReactRedux.useDispatch();

	return (
		<div className="showItems__searchingBar">
			<AddItemButton />
			<div className="showItems__searchFields">
				<input type="text" name="search" className="form-control col-3" placeholder="Search for something" value={searchBar.search} 
					onChange={(e) => handleChange(e, searchBar, setSearchBar)} onKeyDown={(e) => onKeyDown(e, searchBar, useDispatch)}></input>
				<SearchButton onClick={(e) => handleSubmit(e, searchBar, useDispatch)} />
				<FilterButton categoryChecked={searchBar.category} onChange={(e) => handleChange(e, searchBar, setSearchBar)} />
			</div>
		</div>
	);
}