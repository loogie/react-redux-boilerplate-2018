import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from "./store";
import registerServiceWorker from './registerServiceWorker';

import App from './components/app';

import './index.scss';

const target = document.querySelector('#root');

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>, target);
registerServiceWorker();