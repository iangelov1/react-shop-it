import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { productsReducer, productDetailsReducer, newReviewReducer, newProductReducer, productReducer } from './reducers/productReducers';
import { authReducer, userReducer, forgotPasswordReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';
import { newOrderReducer, myOrdersReducer, orderDetailsReducer, allOrdersReducer, orderReducer  } from './reducers/orderReducers';

const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer,
    product: productReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    allOrders: allOrdersReducer,
    orderDetails: orderDetailsReducer,
    order: orderReducer,
    newReview: newReviewReducer
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
