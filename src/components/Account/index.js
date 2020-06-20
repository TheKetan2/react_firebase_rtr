import React from "react";

import { PasswordForgetForm } from "../PasswordForget";

import PasswordChangeForm from "../PasswordChange";

import { withAthorization, AuthUserContext } from "../Session";

const Account = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <h1>Account: {authUser.email}</h1>

        <PasswordChangeForm />

        <PasswordForgetForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;

export default withAthorization(condition)(Account);
