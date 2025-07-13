import { Component } from "react";

export default class Task1Toggle extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  handleToggle = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleToggle}>
          {this.state.isVisible === true ? "Show " : "Hide "}
          {/* {this.state.isVisible ? "Hide " : "Show "} */}
          Paragraph
        </button>
        {/* {this.state.isVisible && <p>Welcome To Toggle</p>} */}
      </div>
    );
  }
}
