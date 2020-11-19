import React from "react";
class PureComponent extends React.PureComponent {
  state = {
    list: [],
  };

  componentDidMount() {
    let newMockedList = [];
    for (let index = 0; index < 1000; index++) {
      newMockedList.push(index + 1);
    }
    this.setState({
      list: newMockedList,
    });
  }

  render() {
    console.log("Pure component render");
    return (
      <div>
        Pure component {this.props.name}
        <br />
        {this.state.list.map((el, index) => (
          <div key={index}>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div> {index + 1} Mock List</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PureComponent;
