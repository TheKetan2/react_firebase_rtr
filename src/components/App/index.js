import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";

import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";

import * as ROUTE from "../../constants/routes";
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "../Session";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <Router>
          <Navigation />

          <hr />
          <Route exact path={ROUTE.LANDING} component={LandingPage} />
          <Route path={ROUTE.SIGN_UP} component={SignUpPage} />
          <Route exact path={ROUTE.SIGN_IN} component={SignInPage} />
          <Route
            exact
            path={ROUTE.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route exact path={ROUTE.HOME} component={HomePage} />
          <Route exact path={ROUTE.ACCOUNT} component={AccountPage} />
          <Route exact path={ROUTE.ADMIN} component={AdminPage} />
        </Router>
      </AuthUserContext.Provider>
    );
  }
}

export default withFirebase(App);
