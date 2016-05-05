/* global window */

import moment from 'moment';

export function getTimeImage(str) {
	switch (str) {
		case '0':
			return 'zero';
		case '1':
			return 'one';
		case '2':
			return 'two';
		case '3':
			return 'three';
		case '4':
			return 'four';
		case '5':
			return 'five';
		case '6':
			return 'six';
		case '7':
			return 'seven';
		case '8':
			return 'eight';
		case '9':
			return 'nine';
		default:
			break;
	}
}

export function processTime(num) {
	const str = String(num);
	let timeImageArr = [];

	for (let i = 0; i < str.length; i += 1) {
		timeImageArr.push(getTimeImage(str[ i ]));
	}

	return timeImageArr;
}

export function buildHours() {
	return processTime(moment().hours());
}

export function buildMinutes() {
	const minutes = processTime(moment().minutes());

	if (minutes.length === 1) {
		minutes.unshift('zero');
	}

	return minutes;
}

export function buildSeconds() {
	const seconds = processTime(moment().seconds());

	if (seconds.length === 1) {
		seconds.unshift('zero');
	}

	return seconds;
}