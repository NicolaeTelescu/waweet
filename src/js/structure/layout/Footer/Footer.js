'use strict';

import {FooterDayPeriod} from './FooterDayPeriod.js';
import {FooterTime} from './FooterTime.js';

export function Footer(props) {
	return (		
		<div className="footer">
			<FooterDayPeriod />
			<FooterTime />
		</div>
	);
}
