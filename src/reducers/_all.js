import clockReducer from 'reducers/clock';
import { combineReducers } from 'redux';
import otaconReducer from 'reducers/otacon';

const reducers = combineReducers({
	clockReducer,
	otaconReducer
});

export default reducers;