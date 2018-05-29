import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

export const history = createHistory();
export default function configureStore(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middleware = [
        // Add other middleware on this line...

        // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
        reduxImmutableStateInvariant(),
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
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}