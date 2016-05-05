import { CLOCK } from 'constants/CLOCK';

class ClockActions {
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

	receiveSeconds(seconds) {
		return {
			seconds,
			type: CLOCK.RECEIVE_SECONDS
		};
	}
}

export default new ClockActions();