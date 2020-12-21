import React from "react";
import { Link } from "react-router-dom";
class ProfilePage extends React.Component {
  goBack() {
    this.props.history.goBack();
  }

  render() {
    console.log(this.props);

    // query parameter
    // new URLSearchParams untuk mengubah bentuk dari yang awal string ke objek agar bisa diakses
    const query = new URLSearchParams(this.props.location.search);
    const keyword = query.get('keyword');
    const sort = query.get('sort');

    // fragment paramater (CONTOH)
    const list = [];
    for (let index = 0; index < 1000; index++) {
      list.push(`Item ${index}`);
    }

    return (
      <div>
        Profile {this.props.match.params.name} <br />
        <p>{keyword} {sort}</p>
        <div>
          <ol>
            {list.map((item, index) => <li key={index} id={index}>{item}</li>)}
          </ol>
        </div>
        <br />
        <Link to="/counter">To Counter Page</Link>
        <br />
        <Link to="/home"> GoBack </Link>
        <button onClick={() => this.goBack()}>Go back</button>
      </div>
    );
  }
}

export default ProfilePage;
