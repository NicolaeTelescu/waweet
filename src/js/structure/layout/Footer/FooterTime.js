'use strict';

import {updatingDate, getFooterDate, updateMinuteTime} from './helpers.js';

const useState = React.useState;
const useEffect = React.useEffect;

export function FooterTime(props) {
	
	const [date, setDate] = useState(new Date());
	const {hours, minutes, partOfTheDay, day, dayNumber, month, year} = getFooterDate(date);

	useEffect(() => updatingDate(date, setDate, updateMinuteTime));
		
	return (
		<div> 
			{hours}:{minutes} {partOfTheDay} - {day} {dayNumber}, {month} {year} 
		</div>
	);
}