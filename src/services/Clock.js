import {
	processTime
} from '../lib/clock';
import moment from 'moment';
import ClockActions from '../actions/Clock';

class ClockServices {
	getTime() {
		return (dispatch) => {
			const hours = moment().hours();
			const minutes = moment().minutes();
			const seconds = moment().seconds();

			dispatch(ClockActions.receiveHours(processTime(hours)));
			dispatch(ClockActions.receiveMinutes(processTime(minutes)));
			dispatch(ClockActions.receiveSeconds(processTime(seconds)));
		};
	}
}

export default new ClockServices();