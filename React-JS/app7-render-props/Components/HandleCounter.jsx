import React, { Component } from "react";

export default class HandleCounter extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.message}</h2>
        {this.props.render()}
      </div>
    );
  }
}
