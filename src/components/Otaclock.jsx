/* global React */

import 'sass/otaclock.scss';

import Clock from 'components/Clock.jsx';
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

	getTime = () => {
		const { dispatch } = this.props;

		dispatch(ClockServices.getTime());
	};

	randomizeEyes = () => {
		const { dispatch } = this.props;

		dispatch(OtaconServices.randomizeEyes());
	};

	render() {
		const { eyes } = this.props.otacon;
		const {
			date,
			day,
			hours,
			minutes,
			month,
			seconds
		} = this.props.clock;

		return (
			<div id='otaclock'>
				<Clock getTime={ this.getTime }
					date={ date }
					day={ day }
					hours={ hours }
					minutes={ minutes }
					month={ month }
					seconds={ seconds } />
				<Otacon randomizeEyes={ this.randomizeEyes }
					eyes={ eyes } />
			</div>
		);
	}
}

export default connect(selector)(Otaclock);