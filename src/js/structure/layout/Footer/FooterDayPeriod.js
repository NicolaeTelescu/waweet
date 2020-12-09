'use strict';

import {getDayPeriod, updatingDate, updateHourTime} from './helpers.js';

const useState = React.useState;
const useEffect = React.useEffect;

export function FooterDayPeriod(props) {
	
	const [date, setDate] = useState(new Date());	
	const dayPeriod = getDayPeriod(date.getHours());

	useEffect(() => updatingDate(date, setDate, updateHourTime));

	return (
		<div style={{fontSize: "20px"}}> {dayPeriod} Time </div>
	);
}