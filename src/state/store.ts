
import { createStore, applyMiddleware, Store } from 'redux';

import logger from 'redux-logger';
import rootReducer, { ApplicationState } from './root.reducer';

const middlewares: any[] = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;