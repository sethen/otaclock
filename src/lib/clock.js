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