import React from "react";
class PureComponent extends React.PureComponent {
  delay() {
    for (let i = 0; i < 800000000; i++) {
      i++;
    }
    return "delayed text";
  }

  render() {
    console.log("Pure component render");
    return (
      <div>
        Pure component {this.props.name}
        <br />
        <p>{this.delay()}</p>
      </div>
    );
  }
}

export default PureComponent;
