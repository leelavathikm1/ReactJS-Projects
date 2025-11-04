import React, { Component } from "react";

export default class HoverComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <button onmo>IncrementCount</button>
      </div>
    );
  }
}
