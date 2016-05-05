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
		const { hours, minutes, seconds } = this.props.clock;

		return (
			<div id='otaclock'>
				<Clock getTime={ this.getTime }
					hours={ hours }
					minutes={ minutes }
					seconds={ seconds } />
				<Otacon randomizeEyes={ this.randomizeEyes }
					eyes={ eyes } />
			</div>
		);
	}
}

export default connect(selector)(Otaclock);