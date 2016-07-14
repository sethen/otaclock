import {
	getDayImage,
	increaseStringNumberArray,
	playAlarm,
	processTime,
	stopAlarm
} from '../lib/clock';
import ClockActions from '../actions/Clock';
import moment from 'moment';
import OtaconActions from '../actions/Otacon';
import OtaconServices from '../services/Otacon';

class ClockServices {
	compareTimeToAlarmTime() {
		return (dispatch, getState) => {
			const {
				alarm,
				alarmHours,
				alarmMinutes,
				hours,
				minutes
			} = getState().clockReducer;
			const { thumbsUpPosition } = getState().otaconReducer;

			if (alarm && !thumbsUpPosition) {
				const alarmTime = `${alarmHours.toString()}${alarmMinutes.toString()}`;
				const time = `${hours.toString()}${minutes.toString()}`;

				if (alarmTime === time) {
					dispatch(OtaconServices.thumbsUp());
					playAlarm();
				}
			}
		};
	}

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

	increaseAlarmHours() {
		return (dispatch, getState) => {
			const clock = getState().clockReducer;
			const stringNumberArray = increaseStringNumberArray(clock.alarmHours, [ 'two', 'four' ]);

			dispatch(ClockActions.receiveAlarmHours(stringNumberArray));
		};
	}

	increaseAlarmMinutes() {
		return (dispatch, getState) => {
			const clock = getState().clockReducer;
			const stringNumberArray = increaseStringNumberArray(clock.alarmMinutes, [ 'five', 'nine' ]);

			dispatch(ClockActions.receiveAlarmMinutes(stringNumberArray));
		};
	}

	toggleAlarm() {
		return (dispatch, getState) => {
			const { alarm } = getState().clockReducer;

			if (alarm) {
				dispatch(ClockActions.disableAlarm());
				dispatch(OtaconActions.stationary());
				stopAlarm();
			}
			else {
				dispatch(ClockActions.enableAlarm());
			}
		};
	}
}

export default new ClockServices();