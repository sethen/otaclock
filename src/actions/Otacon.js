import { OTACON } from 'constants/OTACON';

class OtaconActions {
	ahead() {
		return {
			type: OTACON.AHEAD
		};
	}

	close() {
		return {
			type: OTACON.CLOSE
		};
	}

	downLeft() {
		return {
			type: OTACON.DOWN_LEFT
		};
	}

	downRight() {
		return {
			type: OTACON.DOWN_RIGHT
		};
	}

	forward() {
		return {
			type: OTACON.FORWARD
		};
	}
}

export default new OtaconActions();