/* global React */

import 'sass/otaclock.scss';

import Clock from 'components/Clock.jsx';
import ClockActions from 'actions/Clock';
import ClockServices from 'services/Clock';
import { connect } from 'react-redux';
import Otacon from 'components/Otacon.jsx';
import OtaconServices from 'services/Otacon';

const selector = (state) => {
	return {
		clock: state.clockReducer,
		otacon: state.otaconReducer
	};
};

class Otaclock extends React.Component {
	static propTypes = {
		clock: React.PropTypes.object,
		dispatch: React.PropTypes.func,
		otacon: React.PropTypes.object
	};

	compareTimeToAlarmTime = () => {
		const { dispatch } = this.props;

		dispatch(ClockServices.compareTimeToAlarmTime());
	}

	disableAlarm = () => {
		const { dispatch } = this.props;

		dispatch(ClockActions.disableAlarm());
	};

	enableAlarm = () => {
		const { dispatch } = this.props;

		dispatch(ClockActions.enableAlarm());
	};

	getTime = () => {
		const { dispatch } = this.props;

		dispatch(ClockServices.getTime());
	};

	hideSeparators = () => {
		const { dispatch } = this.props;

		dispatch(ClockActions.hideSeparators());
	}

	increaseAlarmHours = () => {
		const { dispatch } = this.props;

		dispatch(ClockServices.increaseAlarmHours());
	};

	increaseAlarmMinutes = () => {
		const { dispatch } = this.props;

		dispatch(ClockServices.increaseAlarmMinutes());
	};

	randomizeEyes = () => {
		const { dispatch } = this.props;

		dispatch(OtaconServices.randomizeEyes());
	};

	showSeparators = () => {
		const { dispatch } = this.props;

		dispatch(ClockActions.showSeparators());
	}

	toggleAlarm = () => {
		const { dispatch } = this.props;

		dispatch(ClockServices.toggleAlarm());
	};

	thumbsUp = () => {
		const { dispatch } = this.props;

		dispatch(OtaconServices.thumbsUp());
	};

	render() {
		const { eyes, thumbsUpPosition } = this.props.otacon;
		const {
			alarm,
			alarmHours,
			alarmMinutes,
			date,
			day,
			hours,
			minutes,
			month,
			seconds,
			separators
		} = this.props.clock;

		return (
			<div id='otaclock'>
				<Clock alarm={ alarm }
					alarmHours={ alarmHours }
					alarmMinutes={ alarmMinutes }
					compareTimeToAlarmTime={ this.compareTimeToAlarmTime }
					date={ date }
					day={ day }
					disableAlarm={ this.disableAlarm }
					enableAlarm={ this.enableAlarm }
					getTime={ this.getTime }
					hours={ hours }
					increaseAlarmMinutes={ this.increaseAlarmMinutes }
					increaseAlarmHours={ this.increaseAlarmHours }
					minutes={ minutes }
					month={ month }
					seconds={ seconds }
					separators={ separators }
					toggleAlarm={ this.toggleAlarm } />
				<Otacon alarm={ alarm }
					eyes={ eyes }
					randomizeEyes={ this.randomizeEyes }
					thumbsUpPosition={ thumbsUpPosition }
					thumbsUp={ this.thumbsUp } />
			</div>
		);
	}
}

export default connect(selector)(Otaclock);