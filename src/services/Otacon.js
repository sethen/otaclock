/* global window */

import OtaconActions from '../actions/Otacon';

class OtaconServices {
	blink = () => {
		return (dispatch) => {
			dispatch(OtaconActions.close());

			window.setTimeout(() => {
				dispatch(OtaconActions.ahead());
			}, 50);

			window.setTimeout(() => {
				dispatch(OtaconActions.close());
			}, 100);

			window.setTimeout(() => {
				dispatch(OtaconActions.ahead());
			}, 150);
		};
	};

	lookAhead = () => {
		return (dispatch) => {
			window.setTimeout(() => {
				dispatch(OtaconActions.ahead());
			}, 1700);
		};
	}

	randomizeEyes() {
		return (dispatch) => {
			const num = Math.round(Math.random() * 5);

			switch (num) {
				case 0:
				case 1:
				case 2:
					dispatch(this.blink());
					break;
				case 3:
					dispatch(OtaconActions.downRight());
					dispatch(this.lookAhead());
					break;
				case 4:
					dispatch(OtaconActions.downLeft());
					dispatch(this.lookAhead());
					break;
				case 5:
					dispatch(OtaconActions.forward());
					dispatch(this.lookAhead());
					break;
				default:
					dispatch(OtaconActions.ahead());
			}
		};
	}
}

export default new OtaconServices();