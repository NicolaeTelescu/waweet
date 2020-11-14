'use strict';

export class Footer extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = { };
	}
	
	render() {
		return (		
			<div className="footer">
				<FooterEatingTime />
				<FooterTime />
			</div>
		);
	}
}


class FooterEatingTime extends React.Component {
	
	constructor(props) {
		super(props);
		
		let date = new Date();
		let remainingTimeUpdate = (60 - date.getMinutes() - 1) * 60000 + (60 - date.getSeconds()) * 1000;
		
		this.state = {date: date}; // For updating the output
		
		setTimeout(() => {
			this.updateClock();
		}, remainingTimeUpdate);
	}
	
	updateClock() {
		
		let date = new Date();
		let remainingTimeUpdate = (60 - date.getMinutes() - 1) * 60000 + (60 - date.getSeconds()) * 1000;
		
		this.setState({ // For updating the output
			date: date
		});
		
		setTimeout(() => {
			this.updateClock();
		}, remainingTimeUpdate);
	}
	
	render() {
		
		let date = this.state.date;
		let hours = date.getHours();
		
		let dayPeriod = "Snack";
		
		if (hours >= 7 && hours < 11) dayPeriod = "Breakfast";
		if (hours >= 12 && hours < 15) dayPeriod = "Lunch";
		if (hours >= 17 && hours < 20) dayPeriod = "Dinner";
		
		
		return (
			<div style={{fontSize: "24px"}}> {dayPeriod} Time </div>
		);
		
	}
}




class FooterTime extends React.Component {
	
	constructor(props) {
		super(props);
		
		let date = new Date();
		let seconds = date.getSeconds();
		let remainingTimeUpdate = (60 - seconds) * 1000;
		
		this.state = {date: date}; // For updating the output
		
		setTimeout(() => {
			this.updateClock();
		}, remainingTimeUpdate);
	}
	
	updateClock() {
		
		let newDate = new Date();
		let remainingTimeUpdate = (60 - newDate.getSeconds()) * 1000; // I don't put 60000, because setTimeout is not very accurate
		
		this.setState({ // For updating the output
			date: newDate
		});
		
		setTimeout(() => {
			this.updateClock();
		}, remainingTimeUpdate);
	}
	
	render() {
		
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		
		let Time = this.state.date;
		let year = Time.getFullYear();
		let month = Time.getMonth();
		let dayNumber = Time.getDate();
		let day = Time.getDay();
		let hours = Time.getHours();
		let minutes = Time.getMinutes();
		
		// Setting the time accordingly
		let partOfTheDay = "AM";
		
		if (hours == 0) {
			hours = 12;
		}
		else if (hours == 12) {
			partOfTheDay = "PM";
		}
		else if (hours > 12) {
			hours -= 12;
			partOfTheDay = "PM";
		}
		
		if (hours < 10) {
			hours = "0" + hours;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		
		
		return (
			<div> 
				{hours}:{minutes} {partOfTheDay} - {days[day]} {dayNumber}, {months[month]} {year} 
			</div>
		);
	}
}