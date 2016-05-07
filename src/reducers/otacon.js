import { OTACON } from 'constants/OTACON';
import otaconState from 'states/otacon';

export default function otaconReducer(state = otaconState, action) {
	const type = action.type;

	switch (type) {
		case OTACON.AHEAD:
		case OTACON.CLOSE:
		case OTACON.DOWN_LEFT:
		case OTACON.DOWN_RIGHT:
		case OTACON.FORWARD:
			return Object.assign({}, state, {
				eyes: type
			});
		case OTACON.DECREASE_THUMBS_UP:
			return Object.assign({}, state, {
				thumbsUpPosition: state.thumbsUpPosition -= 1
			});
		case OTACON.INCREASE_THUMBS_UP:
			return Object.assign({}, state, {
				thumbsUpPosition: state.thumbsUpPosition += 1
			});
		default:
			return state;
	}
}