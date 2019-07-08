import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import appReducer from '../reducers/appReducer';
import weatherReducer from '../reducers/weatherReducer';

const rootReducer = combineReducers({
  app: appReducer,
  weather: weatherReducer,
});

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  // Call it only when process.ENV = 'devlopment'
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));

export default store;
