import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { productsReducer, productDetailsReducer } from './reducers/productReducers';
import { authReducer, userReducer, forgotPasswordReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';
import { newOrderReducer } from './reducers/orderReducers';

const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ?   JSON.parse(localStorage.getItem('cartItems'))
            :   [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ?   JSON.parse(localStorage.getItem('shippingInfo'))
            :   {}
    }
};

export const middlewares = [thunk, logger];

const store = createStore(reducer, initialState, applyMiddleware(...middlewares));

export default store;
