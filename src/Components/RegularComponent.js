import React from "react";
class RegularComponent extends React.Component {
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
    console.log("Regular component render");
    return (
      <div>
        Regular component {this.props.name}
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

export default RegularComponent;
