import React from "react";
class PureComponent extends React.Component {
  render() {
    console.log("Regular component render");
    return <div>Regular component {this.props.name} </div>;
  }
}

export default PureComponent;
