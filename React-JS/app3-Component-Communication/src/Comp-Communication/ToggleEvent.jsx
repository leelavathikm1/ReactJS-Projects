import { Component } from "react";

export default class ToggleEvent extends Component {
  constructor(props) {
    super(props);

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
        {/* {this.state.isVisible === true ? "Show" : "Hide"} */}
        <button onClick={this.handleToggle}>
          {this.state.isVisible === true ? "Show" : "Hide"} - Paragraph
          {/* {this.state.isVisible ? "Show" : "Hide"} Paragraph */}
        </button>
        {this.state.isVisible && <p>Welcome To Paragraph !!</p>}
      </div>
    );
  }
}
