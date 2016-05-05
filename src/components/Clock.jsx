/* global React, window */

class Clock extends React.Component {
	static propTypes = {
		getTime: React.PropTypes.func,
		hours: React.PropTypes.string,
		minutes: React.PropTypes.string,
		seconds: React.PropTypes.string
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

	render() {
		const {
			hours,
			minutes,
			seconds
		} = this.props;

		return (
			<div id='clock'>
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
			</div>
		);
	}
}

export default Clock;