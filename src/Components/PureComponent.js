import React from "react";
class PureComponent extends React.PureComponent {
  render() {
    console.log("Pure component render");
    return <div>Regular component {this.props.name} </div>;
  }
}

export default PureComponent;
