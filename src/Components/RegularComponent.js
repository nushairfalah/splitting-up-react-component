import React from "react";
class RegularComponent extends React.Component {
  delay() {
    for (let i = 0; i < 800000000; i++) {
      i++;
    }
    return "delayed text";
  }

  render() {
    console.log("Regular component render");
    return (
      <div>
        Regular component {this.props.name}
        <br />
        <p>{this.delay()}</p>
      </div>
    );
  }
}

export default RegularComponent;
