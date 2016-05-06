import { CLOCK } from 'constants/CLOCK';

class ClockActions {
	receiveDate(date) {
		return {
			date,
			type: CLOCK.RECEIVE_DATE
		};
	}

	receiveDay(day) {
		return {
			day,
			type: CLOCK.RECEIVE_DAY
		};
	}

	receiveHours(hours) {
		return {
			hours,
			type: CLOCK.RECEIVE_HOURS
		};
	}

	receiveMinutes(minutes) {
		return {
			minutes,
			type: CLOCK.RECEIVE_MINUTES
		};
	}

	receiveMonth(month) {
		return {
			month,
			type: CLOCK.RECEIVE_MONTH
		};
	}

	receiveSeconds(seconds) {
		return {
			seconds,
			type: CLOCK.RECEIVE_SECONDS
		};
	}
}

export default new ClockActions();