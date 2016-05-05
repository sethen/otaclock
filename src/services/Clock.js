import {
	buildHours,
	buildMinutes,
	buildSeconds
} from '../lib/clock';
import ClockActions from '../actions/Clock';

class ClockServices {
	getTime() {
		return (dispatch) => {
			dispatch(ClockActions.receiveHours(buildHours()));
			dispatch(ClockActions.receiveMinutes(buildMinutes()));
			dispatch(ClockActions.receiveSeconds(buildSeconds()));
		};
	}
}

export default new ClockServices();