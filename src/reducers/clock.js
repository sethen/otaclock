import { CLOCK } from 'constants/CLOCK';
import clockState from 'states/clock';

export default function clockReducer(state = clockState, action) {
	const type = action.type;

	switch (type) {
		case CLOCK.RECEIVE_HOURS:
			return Object.assign({}, state, {
				hours: action.hours
			});
		case CLOCK.RECEIVE_MINUTES:
			return Object.assign({}, state, {
				minutes: action.minutes
			});
		case CLOCK.RECEIVE_SECONDS:
			return Object.assign({}, state, {
				seconds: action.seconds
			});
		default:
			return state;
	}
}