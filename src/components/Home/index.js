import React from "react";

import { withAthorization } from "../Session";

const Home = () => (
  <div>
    <h1>Homepage</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = (authUser) => !!authUser;

export default withAthorization(condition)(Home);
