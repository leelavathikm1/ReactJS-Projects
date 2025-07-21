import { Component } from "react";

class CompB extends Component {
  render() {
    return (
      <div>
        <h3>Welcome From CompB</h3>
        <hr />
        <p>{this.props.msg}</p>
      </div>
    );
  }
}

export default CompB;
