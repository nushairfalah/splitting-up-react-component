import React from "react";
import { Link } from "react-router-dom";
class ProfilePage extends React.Component {
  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        Profile <br />
        <Link to="/counter">To Counter Page</Link>
        <br />
        <Link to="/home"> GoBack </Link>
        <button onClick={() => this.goBack()}>Go back</button>
      </div>
    );
  }
}

export default ProfilePage;
