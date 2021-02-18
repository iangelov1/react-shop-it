import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import ProductDetails from './components/products/ProductDetails';
import Login from './components/user/Login';
import Register from './components/user/Register';

import { loadUser } from './actions/userActions';

import store from './store';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute'
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import NewPassword from './components/user/NewPassword';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';

<<<<<<< HEAD
// Admin Imports
import Dashboard from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
// import NewProduct from './components/admin/NewProduct';

import ProtectedRoute from './components/route/ProtectedRoute';
import { loadUser } from './actions/userActions';
import { useSelector } from 'react-redux';
import store from './store';
=======
import Payment from './components/cart/Payment';
import OrderSuccess from './components/cart/OrderSuccess';

import ListOrders from './components/order/ListOrders';

>>>>>>> parent of fdb5aa8 (admin sidebar component / dashboard component / display all products admin)
import axios from 'axios';

// Payment
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import OrderDetails from './components/order/OrderDetails';

const App = () => {

    const [stripeApiKey, setStripeApiKey] = useState('');

    useEffect(() => {
        store.dispatch(loadUser())

        async function getStripApiKey() {
            const { data } = await axios.get('/api/v1/stripeapi');
            
            setStripeApiKey(data.stripeApiKey)
        }

        getStripApiKey();
    }, []);

    const { user, isAuthenticated, loading } = useSelector(state => state.auth)

    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container container-fluid">

                    <Route path="/" component={Home} exact />
                    <Route path="/search/:keyword" component={Home} />
                    <Route path="/product/:id" component={ProductDetails} exact />

                    <Route path="/cart" component={Cart} exact />
                    <ProtectedRoute path="/shipping" component={Shipping} />
                    <ProtectedRoute path="/success" component={OrderSuccess} />

                    {stripeApiKey &&
                        <Elements stripe={loadStripe(stripeApiKey)}>
                            <ProtectedRoute path="/payment" component={Payment} />
                        </Elements>
                    }

                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/password/forgot" component={ForgotPassword} exact />
                    <Route path="/password/reset/:token" component={NewPassword} exact />

                    <ProtectedRoute path="/confirm" component={ConfirmOrder} />

                    <ProtectedRoute path="/me" component={Profile} exact />
                    <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
                    <ProtectedRoute path="/password/update" component={UpdatePassword} exact />

                    <ProtectedRoute path="/orders/me" component={ListOrders} exact />
                    <ProtectedRoute path="/order/:id" component={OrderDetails} exact />
                </div>
<<<<<<< HEAD

                <ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact />
                <ProtectedRoute path="/admin/products" isAdmin={true} component={ProductsList} exact />
                {/* <ProtectedRoute path="/admin/product" isAdmin={true} component={NewProduct} exact /> */}

                {!loading && (!isAuthenticated || user.role !== 'admin') && (
                    <Footer />
                )}
=======
                <Footer />
>>>>>>> parent of fdb5aa8 (admin sidebar component / dashboard component / display all products admin)
            </div>
        </Router>
    )
}

export default App;
