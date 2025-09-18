import React, { Component } from "react";

function HocOneComp(MediaterComp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    clickIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };

    clickDecrement = () => {
      this.setState({ count: this.state.count - 1 });
    };

    clickReset = () => {
      this.setState({ count: 0 });
    };

    render() {
      return (
        <div>
          <MediaterComp
            clickIncrement={this.clickIncrement}
            clickDecrement={this.clickDecrement}
            clickReset={this.clickReset}
            {...this.state}
          />
        </div>
      );
    }
  };
}
export default HocOneComp;
