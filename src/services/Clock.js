import {
	processTime,
	getDayImage
} from '../lib/clock';
import moment from 'moment';
import ClockActions from '../actions/Clock';

class ClockServices {
	getTime() {
		return (dispatch) => {
			const date = moment().date();
			const day = moment().day();
			const hours = moment().hours();
			const minutes = moment().minutes();
			const month = moment().month() + 1;
			const seconds = moment().seconds();

			dispatch(ClockActions.receiveDate(processTime(date)));
			dispatch(ClockActions.receiveDay(getDayImage(day)));
			dispatch(ClockActions.receiveHours(processTime(hours)));
			dispatch(ClockActions.receiveMinutes(processTime(minutes)));
			dispatch(ClockActions.receiveMonth(processTime(month, false)));
			dispatch(ClockActions.receiveSeconds(processTime(seconds)));
		};
	}
}

export default new ClockServices();