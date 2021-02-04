import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { productsReducer, productDetailsReducer } from './reducers/productReducers';
import { authReducer, userReducer } from './reducers/userReducers';

const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
    user: userReducer
})

let initialState = {};

export const middlewares = [thunk, logger];

const store = createStore(reducer, initialState, applyMiddleware(...middlewares));

export default store;
