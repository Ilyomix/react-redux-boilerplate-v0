import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/appStore';
import AppRoutes from './routes/AppRoutes';
import * as serviceWorker from './serviceWorker';

import './assets/index.css';

if (typeof window !== 'undefined') window.store = store;
// eslint-disable-next-line react/jsx-filename-extension
const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
