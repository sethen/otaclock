/* global document, React, ReactDOM */

import Otaclock from 'components/Otaclock.jsx';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
	render() {
		return (
			<Otaclock />
		);
	}
}

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
document.getElementById('app'));