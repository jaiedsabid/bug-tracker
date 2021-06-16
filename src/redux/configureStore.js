import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Bugs from "./BUG";

export default function ConfigureStore() {
    const store = createStore(
        combineReducers({
            bugs: Bugs
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}