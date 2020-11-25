'use strict';

import {setRating} from '../../../redux/actions/index.js';

const useSelector = ReactRedux.useSelector;
const useState = React.useState;
const useEffect = React.useEffect;

export function ContainerText({errors}) {

	const [item, setItem] = useState({
		title: params.form ? params.form.title : "",
		category: params.form ? params.form.category : "Set the category"
	}); 

	const handleInputChange = (event) => {
		const name = event.target.name;

		const newItem = Object.assign({}, item);
		newItem[name] = event.target.value;
		setItem(newItem);
	};

	return (
		<div className="itemPage__details-text">
			
			<Title item={item} handleInputChange={handleInputChange} errors={errors} />
			<Category handleInputChange={handleInputChange} item={item} errors={errors} />
			<Rating />
			<div className="itemPage__buttons">
				<AcceptButton />
				<RejectButton />
			</div>

		</div>
	);
}

function Title({item, handleInputChange, errors}) {
	return (
		<div>
			<div className="itemPage__details-text-category">
				<span>Title:</span>
				<span className="itemPage__details-text-value-error">{errors.titleError ? errors.titleError.msg : null}</span>
			</div>
			<div className="itemPage__details-text-value">
				<input className="form-control" name="title" type="text" maxLength="25" onChange={handleInputChange} placeholder="Product title" value={item.title}></input>
			</div>
		</div>
	);
}

function Category({handleInputChange, item, errors}) {

	const categories = params.categories.map((category, index) => (
		<option key={index} value={category.name}>{category.name}</option>
	));

	return (
		<div>
			<div className="itemPage__details-text-category">
				<span>Category:</span>
				<span className="itemPage__details-text-value-error">{errors.categoryError ? errors.categoryError.msg : null}</span>
			</div>
			<div className="itemPage__details-text-value">
				<select className="custom-select" name="category" value={item.category} onChange={handleInputChange}>
					<option defaultValue>- Set the category -</option>
					{categories}
				</select>
			</div>
		</div>
	);
}

function Rating({}) {

	const useDispatch = ReactRedux.useDispatch();

	const rating = useSelector(state => state.rating.rating);
	const textForRating = useSelector(state => state.rating.text);
	const colorForRating = useSelector(state => state.rating.color);

	const myStyle = {
		backgroundColor: colorForRating
	};

	const handleChangeRating = (event) => {
		useDispatch(setRating(event.target.value));
	};

	useEffect(() => {
		if (params.form)
			useDispatch(setRating(params.form.rating));
	}, []);

	return (
		<div>
			<div className="itemPage__details-text-category">Rating:</div>
			<div className="itemPage__details-text-value"><span style={myStyle}>{textForRating}</span></div>
			<input className="itemPage__range custom-range" name="rating" type="range" onChange={handleChangeRating} min="0" max="100" value={rating}></input>
		</div>
	);
}

function AcceptButton(props) {
	return (
		<a onClick={() => {document.getElementById("itemForm").submit()}}>
			<svg width="1em" height="1em" viewBox="0 0 16 16" className="itemPage__button__accept bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
			</svg>
		</a>
	);
}

function RejectButton(props) {
	return (
		<a href="/">
			<svg width="1em" height="1em" viewBox="0 0 16 16" className="itemPage__button__reject bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
			</svg>
		</a>
	);
}