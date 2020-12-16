'use strict';


import {Title} from './Title.js';
import {Category} from './Category.js';
import {Rating} from './Rating.js';
import {AcceptButton, RejectButton} from './ButtonsSVG.js';


export function ContainerText({item, errors, handleChange, sendForm}) {
	return (
		<div className="itemPage__details-text">
			
			<Title item={item} handleChange={handleChange} errors={errors} />
			<Category item={item} handleChange={handleChange} errors={errors} />
			<Rating item={item} />
			<div className="itemPage__buttons">
				<AcceptButton sendForm={sendForm}/>
				<RejectButton />
			</div>

		</div>
	);
}