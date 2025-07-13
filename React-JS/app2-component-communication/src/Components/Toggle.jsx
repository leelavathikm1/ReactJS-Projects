import React, { Component } from "react";

export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }

  handleToggle = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleToggle}>
          Paragraph
        </button>
        {this.state.isVisible && <p>Welcome To Toggle text</p>}
      </div>
    );
  }
}
