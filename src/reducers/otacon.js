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
		default:
			return state;
	}
}