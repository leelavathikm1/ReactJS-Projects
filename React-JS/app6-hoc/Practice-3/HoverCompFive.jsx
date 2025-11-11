import React, { Component } from "react";

export default class HoverCompFive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <button>Increase</button>
      </div>
    );
  }
}
