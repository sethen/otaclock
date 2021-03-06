/* global React, window */

import classnames from 'classnames';

class Clock extends React.Component {
	static propTypes = {
		alarm: React.PropTypes.bool,
		alarmHours: React.PropTypes.array,
		alarmMinutes: React.PropTypes.array,
		compareTimeToAlarmTime: React.PropTypes.func,
		date: React.PropTypes.array,
		day: React.PropTypes.string,
		getTime: React.PropTypes.func,
		hours: React.PropTypes.array,
		increaseAlarmHours: React.PropTypes.func,
		increaseAlarmMinutes: React.PropTypes.func,
		minutes: React.PropTypes.array,
		month: React.PropTypes.array,
		seconds: React.PropTypes.array,
		separators: React.PropTypes.bool,
		toggleAlarm: React.PropTypes.func
	}

	componentWillMount() {
		const { getTime } = this.props;

		getTime();
	}

	componentDidMount() {
		const {
			compareTimeToAlarmTime,
			getTime
		} = this.props;

		window.setInterval(() => {
			compareTimeToAlarmTime();
			getTime();
		}, 1000);
	}

	render() {
		const {
			alarm,
			alarmHours,
			alarmMinutes,
			date,
			day,
			hours,
			increaseAlarmHours,
			increaseAlarmMinutes,
			minutes,
			month,
			seconds,
			separators,
			toggleAlarm
		} = this.props;
		const alarmClasses = classnames({
			blue: alarm === false,
			red: alarm === true
		});
		const separatorClasses = classnames({
			separator: separators
		});

		return (
			<div id='clock'>
				<div id='month'>
					<div className={ 'small-' + (month && month[ 0 ]) }></div>
				</div>

				<div id='date'>
					<div className={ 'small-' + (date && date[ 0 ]) + ' first' }></div>
					<div className={ 'small-' + (date && date[ 1 ]) + ' second' }></div>
				</div>

				<div id='day'>
					<div className={ day }></div>
				</div>

				<div id='hours' className={ separatorClasses }>
					<div className={ (hours && hours[ 0 ]) + ' first' }></div>
					<div className={ (hours && hours[ 1 ]) + ' second' }></div>
				</div>

				<div id='minutes' className={ separatorClasses }>
					<div className={ (minutes && minutes[ 0 ]) + ' first' }></div>
					<div className={ (minutes && minutes[ 1 ]) + ' second' }></div>
				</div>

				<div id='seconds'>
					<div className={ (seconds && seconds[ 0 ]) + ' first'}></div>
					<div className={ (seconds && seconds[ 1 ]) + ' second' }></div>
				</div>

				<div id='alarm' className={ alarmClasses } onClick={ toggleAlarm }></div>

				<div id='alarm-hours' className={ separatorClasses } onClick={ increaseAlarmHours }>
					<div className={ 'small-' + (alarmHours && alarmHours[ 0 ]) + ' first'}></div>
					<div className={ 'small-' + (alarmHours && alarmHours[ 1 ]) + ' second'}></div>
				</div>

				<div id='alarm-minutes' onClick={ increaseAlarmMinutes }>
					<div className={ 'small-' + (alarmMinutes && alarmMinutes[ 0 ]) + ' first'}></div>
					<div className={ 'small-' + (alarmMinutes && alarmMinutes[ 1 ]) + ' second'}></div>
				</div>
			</div>
		);
	}
}

export default Clock;