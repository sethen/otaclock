/* global React, window */
/* global window */

import classnames from 'classnames';

let randomizeEyesInterval;
let thumbsUpInterval;

class Otacon extends React.Component {
	static propTypes = {
		eyes: React.PropTypes.string,
		randomizeEyes: React.PropTypes.func,
		thumbsUp: React.PropTypes.func,
		thumbsUpPosition: React.PropTypes.number
	};

	componentWillReceiveProps(nextProps) {
		const { randomizeEyes, thumbsUp } = this.props;

		if (nextProps.thumbsUpPosition > 0) {
			if (randomizeEyesInterval) {
				window.clearInterval(randomizeEyesInterval);
				randomizeEyesInterval = null;
			}

			if (!thumbsUpInterval) {
				thumbsUpInterval = window.setInterval(() => {
					thumbsUp();
				}, 500);
			}
		}
		else {
			if (thumbsUpInterval) {
				window.clearInterval(thumbsUpInterval);
				thumbsUpInterval = null;
			}

			if (!randomizeEyesInterval) {
				randomizeEyesInterval = window.setInterval(() => {
					randomizeEyes();
				}, 5000);
			}
		}
	}

	render() {
		const { eyes, thumbsUpPosition } = this.props;
		const eyesClasses = classnames({
			eyes: true,
			[ eyes ]: true
		});

		if (thumbsUpPosition) {
			return (
				<div id='otacon'>
					<div className={ `thumbs-up-${thumbsUpPosition}` }></div>
				</div>
			);
		}

		return (
			<div id='otacon'>
				<div className='stationary'></div>
				<div className={ eyesClasses }></div>
			</div>
		);
	}
}

export default Otacon;