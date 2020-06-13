import React from 'react';

import {BrowserRouter as Router, Route} from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";

import * as ROUTE from "../../constants/routes";


const App = () => (
    <Router>
        <Navigation />
        <hr />
        <Route exact path={ROUTE.LANDING} component={LandingPage} />
        <Route  path={ROUTE.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTE.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTE.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route exact path={ROUTE.HOME} component={HomePage} />
        <Route exact path={ROUTE.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTE.ADMIN} component={AdminPage}/>
    </Router>
);

export default App;