import React from "react";

import { withFirebase } from "../Firebase";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on("value", (snapshot) => {
      const userObject = snapshot.val();
      const userList = Object.keys(userObject).map((key) => ({
        ...userObject[key],
        uid: key,
      }));

      this.setState({ users: userList, loading: false });
    });
  }

  render() {
    return (
      <div>
        <h1>Admin</h1>
      </div>
    );
  }
}

export default withFirebase(Admin);
