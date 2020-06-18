import React from "react";

import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";

const Account = () => (
  <div>
    <h1>Account Page</h1>
    <PasswordChangeForm />
    <PasswordForgetForm />
  </div>
);

export default Account;
