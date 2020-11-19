import React from "react";
class RegularComponent extends React.Component {
  render() {
    console.log("Regular component render");
    return <div>Regular component {this.props.name} </div>;
  }
}

export default RegularComponent;
