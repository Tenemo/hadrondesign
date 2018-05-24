import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers/index').default;

            store.replaceReducer(nextReducer);
        });
        return createStore(
            rootReducer,
            initialState,
            applyMiddleware(reduxImmutableStateInvariant())
        );
    }