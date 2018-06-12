import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

export const history = createHistory();

function configureStoreDev(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middleware = [
        reduxImmutableStateInvariant({
            ignore: [
                'game.board'
            ]
        }),
        thunk,
        reactRouterMiddleware
    ];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware)
        )
    );
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
          const nextReducer = require('../reducers').default;
          store.replaceReducer(nextReducer);
        });
      }
    return store;
}

function configureStoreProd(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
        thunk,
        reactRouterMiddleware,
    ];

    return createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares)
    )
    );
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;