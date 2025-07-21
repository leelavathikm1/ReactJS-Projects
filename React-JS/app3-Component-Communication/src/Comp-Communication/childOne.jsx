import { Component } from "react";

class ChildOne extends Component {
  render() {
    return (
      <div>
        {/* <h2> Iam From Child One Component</h2> */}
        {this.props.info}
      </div>
    );
  }
}

export default ChildOne;
