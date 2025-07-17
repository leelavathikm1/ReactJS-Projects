import { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.info}</h2>
      </div>
    );
  }
}

export default Child;
