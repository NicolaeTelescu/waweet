'use strict';


import {Title} from './Title.js';
import {Category} from './Category.js';
import {Rating} from './Rating.js';
import {AcceptButton, RejectButton} from './ButtonsSVG.js';
import {handleChange, initialItemState} from './helpers.js';

const useState = React.useState;

export function ContainerText({errors}) {

	const [item, setItem] = useState(initialItemState());

	return (
		<div className="itemPage__details-text">
			
			<Title item={item} handleChange={(e) => handleChange(e, item, setItem)} errors={errors} />
			<Category handleChange={(e) => handleChange(e, item, setItem)} item={item} errors={errors} />
			<Rating />
			<div className="itemPage__buttons">
				<AcceptButton />
				<RejectButton />
			</div>

		</div>
	);
}