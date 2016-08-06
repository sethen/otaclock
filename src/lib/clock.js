/* global Audio, require, window */

const alarmOne = require('sounds/alarm.wav');
const alarm = new Audio(alarmOne);
let alarmInterval;

/**
 * Decides appropriate sting for image from string
 * @param  {string} str String to find
 * @return {string}     String image
 */
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

/**
 * Gets day string
 * @param  {number} num Number of day
 * @return {string}     String day
 */
export function getDayImage(num) {
	const str = String(num);

	switch (str) {
		case '0':
			return 'sunday';
		case '1':
			return 'monday';
		case '2':
			return 'tuesday';
		case '3':
			return 'wednesday';
		case '4':
			return 'thursday';
		case '5':
			return 'friday';
		case '6':
			return 'saturday';
		case '7':
			return 'sunday';
		default:
			break;
	}
}

/**
 * Increase string number array
 * @param  {array} arr      Array of string numbers
 * @param  {[type]} restart
 * @return {array}          Array of increased string numbers
 */
export function increaseStringNumberArray(arr, restart) {
	const increasedArr = [];
	let stringNumber = '';
	let method = '';

	if (restart.toString() === arr.toString()) {
		return [ 'zero', 'zero' ];
	}
	else if (arr[ 1 ] === 'nine') {
		increasedArr.push('zero');
		stringNumber = arr[ 0 ];
		method = 'unshift';
	}
	else if (arr[ 1 ] !== 'nine') {
		increasedArr.push(arr[ 0 ]);
		stringNumber = arr[ 1 ];
		method = 'push';
	}

	switch (stringNumber) {
		case 'zero':
			increasedArr[ method ]('one');
			break;
		case 'one':
			increasedArr[ method ]('two');
			break;
		case 'two':
			increasedArr[ method ]('three');
			break;
		case 'three':
			increasedArr[ method ]('four');
			break;
		case 'four':
			increasedArr[ method ]('five');
			break;
		case 'five':
			increasedArr[ method ]('six');
			break;
		case 'six':
			increasedArr[ method ]('seven');
			break;
		case 'seven':
			increasedArr[ method ]('eight');
			break;
		case 'eight':
			increasedArr[ method ]('nine');
			break;
		case 'nine':
			increasedArr[ method ]('zero');
			break;
		default:
			break;
	}

	return increasedArr;
}

/**
 * Play alarm
 */
export function playAlarm() {
	if (typeof alarm.loop === 'boolean') {
		alarm.loop = true;
	}
	else {
		alarm.addEventListener('ended', () => {
			this.currentTime = 0;
			this.play();
		}, false);
	}

	alarm.play();
}

/**
 * Processes time
 * @param  {number} num Number representing part of a time
 * @return {array}      Array of time string parts
 */
export function processTime(num, zero = true) {
	const str = String(num);
	let timeImageArr = [];

	for (let i = 0; i < str.length; i += 1) {
		timeImageArr.push(getTimeImage(str[ i ]));
	}

	if (timeImageArr.length === 1 && zero) {
		timeImageArr.unshift('zero');
	}

	return timeImageArr;
}

/**
 * Stop alarm
 */
export function stopAlarm() {
	window.clearInterval(alarmInterval);
	alarm.pause();
	alarm.currentTime = 0;
}