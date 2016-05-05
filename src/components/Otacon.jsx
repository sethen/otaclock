/* global React, window */

import classnames from 'classnames';

class Otacon extends React.Component {
	static propTypes = {
		eyes: React.PropTypes.string,
		randomizeEyes: React.PropTypes.func
	};

	componentDidMount() {
		const { randomizeEyes } = this.props;

		window.setInterval(() => {
			randomizeEyes();
		}, 5000);
	}

	render() {
		const { eyes } = this.props;
		const eyesClasses = classnames({
			eyes: true,
			[ eyes ]: true
		});

		return (
			<div id='otacon'>
				<div className='stationary'></div>
				<div className={ eyesClasses }></div>
			</div>
		);
	}
}

export default Otacon;