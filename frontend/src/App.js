import { useEffect } from 'react';

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

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser())
    }, [])

    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container container-fluid">
                    <Route path="/" component={Home} exact />
                    <Route path="/search/:keyword" component={Home} />
                    <Route path="/product/:id" component={ProductDetails} exact />

                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/me" component={Profile} />
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
