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
          {/* Type2 */}
          {/* {this.state.isVisible === true ? "show " : "Hide "} */}
          {/* Type3 */}
          {this.state.isVisible ? "Show " : "Hide"}
          Paragraph
        </button>
        {/* Type1 */}
        {/* {this.state.isVisible && <p>Welcome To Toggle text</p>} */}
        {this.state.isVisible}
      </div>
    );
  }
}
