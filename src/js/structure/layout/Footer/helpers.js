'use strict';

export function getDayPeriod(hour) {
	let dayPeriod = "Snack";
	
	if (hour >= 7 && hour < 11) dayPeriod = "Breakfast";
	if (hour >= 12 && hour < 15) dayPeriod = "Lunch";
	if (hour >= 17 && hour < 20) dayPeriod = "Dinner";

	return dayPeriod;
}

export function updatingDate(date, setDate, timeUntilUpdate) {
	setTimeout(() => {
		setDate(new Date());
	}, timeUntilUpdate(date));
}

export function updateHourTime(date) {
	return (60 - date.getMinutes() - 1) * 60000 + (60 - date.getSeconds()) * 1000;
}

export function updateMinuteTime(date) {
	return (60 - date.getSeconds()) * 1000;
}

export function getFooterDate(date) {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	const year = date.getFullYear();
	const month = date.getMonth();
	const dayNumber = date.getDate();
	const day = date.getDay();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	
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

	return {hours, minutes, partOfTheDay, day: days[day], dayNumber, month: months[month], year};
}