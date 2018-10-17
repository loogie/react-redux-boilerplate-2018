import {createBrowserHistory} from 'history';
import {applyMiddleware, compose, createStore} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './modules';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [
    thunk, 
    routerMiddleware(history)
];

const composeEnhancers = 
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
);

const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    enhancer
);

export default store;