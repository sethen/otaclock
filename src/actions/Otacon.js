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

	decreaseThumbsUp() {
		return {
			type: OTACON.DECREASE_THUMBS_UP
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

	increaseThumbsUp() {
		return {
			type: OTACON.INCREASE_THUMBS_UP
		};
	}
}

export default new OtaconActions();