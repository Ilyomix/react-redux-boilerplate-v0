// @flow
import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import appReducer from '../reducers/appReducer';
import weatherReducer from '../reducers/weatherReducer';
import { Action, GetState, ThunkAction, PromiseAction } from '../types/redux-types';

const rootReducer: Action = combineReducers({
  app: appReducer,
  weather: weatherReducer,
});

const store: ThunkAction = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  // Call it only when process.ENV = 'devlopment'
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

export default store;
