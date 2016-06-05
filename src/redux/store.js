import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const finalCreateStore = compose(
    applyMiddleware(thunk, logger())
)(createStore);

export default function setupStore(initialState = {message: [{}]}) {
    return finalCreateStore(rootReducer, initialState);
}