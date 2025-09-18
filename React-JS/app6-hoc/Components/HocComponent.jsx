import React, { Component } from "react";

function HocComponent(wrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
      console.log(this.props);
    }

    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
      this.setState({ count: this.state.count - 1 });
    };

    handleRest = () => {
      this.setState({ count: 0 });
    };

    render() {
      return (
        <div>
          <wrappedComponent
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleRest={this.handleRest}
            {...this.props}
          />
        </div>
      );
    }
  };
}
export default HocComponent;
