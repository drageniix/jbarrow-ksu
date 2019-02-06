import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import commonReducerCreator from './reducers/common';
import subscribe from './subscribe';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default async isServer => {
    const commonReducer = commonReducerCreator();

    const reducer = combineReducers({
        common: commonReducer
    });

    let store;
    if (isServer && typeof window === 'undefined') {
        store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
    } else {
        store = window.storen
            ? window.store
            : (window.store = createStore(
                  reducer,
                  composeEnhancers(applyMiddleware(thunk))
              ));
    }

    subscribe(store);
    return store;
};
