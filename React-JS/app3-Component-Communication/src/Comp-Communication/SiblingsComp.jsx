import React, { Component } from "react";
import CompA from "./CompA";
import CompB from "./CompB";

class SiblingsComp extends Component {
  constructor() {
    super();
    this.state = {
      commonMessage: "Welcome to Common Message",
    };
  }

  msgChangeFunc = () => {
    this.setState({ commonMessage: "I Got Changed From CompA!!" });
  };

  render() {
    return (
      <div>
        <CompA changeMessageComp={this.msgChangeFunc} />
        <hr />
        <CompB msg={this.state.commonMessage} />
      </div>
    );
  }
}

export default SiblingsComp;
