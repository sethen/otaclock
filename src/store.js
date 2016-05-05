

import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import reducers from './reducers/_all';
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleWare = applyMiddleware(
	thunkMiddleware,
	createLogger({
		collapsed: true
	})
)(createStore);

export default createStoreWithMiddleWare(reducers);