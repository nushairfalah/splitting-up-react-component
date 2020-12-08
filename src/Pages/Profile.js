import React from "react";
import { Link } from "react-router-dom";
class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        Profile <br />
        <Link to="/home">To Home Page</Link>
      </div>
    );
  }
}

export default ProfilePage;
