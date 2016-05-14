/* global React, window */

import classnames from 'classnames';

class Clock extends React.Component {
	static propTypes = {
		date: React.PropTypes.array,
		day: React.PropTypes.string,
		getTime: React.PropTypes.func,
		hours: React.PropTypes.array,
		minutes: React.PropTypes.array,
		month: React.PropTypes.array,
		seconds: React.PropTypes.array
	}

	componentWillMount() {
		const { getTime } = this.props;

		getTime();
	}

	componentDidMount() {
		const { getTime } = this.props;

		window.setInterval(() => {
			getTime();
		}, 1000);
	}

	toggleAlarm = () => {
		const {
			alarm,
			disableAlarm,
			enableAlarm
		} = this.props;

		if (alarm) {
			disableAlarm();
		}
		else {
			enableAlarm();
		}
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
			seconds
		} = this.props;
		const alarmClasses = classnames({
			blue: alarm === false,
			red: alarm === true
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

				<div id='hours'>
					<div className={ (hours && hours[ 0 ]) + ' first' }></div>
					<div className={ (hours && hours[ 1 ]) + ' second' }></div>
				</div>

				<div id='minutes'>
					<div className={ (minutes && minutes[ 0 ]) + ' first' }></div>
					<div className={ (minutes && minutes[ 1 ]) + ' second' }></div>
				</div>

				<div id='seconds'>
					<div className={ (seconds && seconds[ 0 ]) + ' first'}></div>
					<div className={ (seconds && seconds[ 1 ]) + ' second' }></div>
				</div>

				<div id='alarm' className={ alarmClasses } onClick={ this.toggleAlarm }></div>

				<div id='alarm-hours' onClick={ increaseAlarmHours }>
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