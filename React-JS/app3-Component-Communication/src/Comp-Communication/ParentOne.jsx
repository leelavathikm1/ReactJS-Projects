import { Component } from "react";
import ChildOne from "./childOne";

class ParentOne extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to ParentOne message  called from ChildOne Comp!",
    };
  }

  changeMsgInParent = () => {
    this.setState({
      message: "This Message Changed When you Clicked the Button",
    });
  };

  render() {
    return (
      <div>
        <h2>Iam From ParentOne Component</h2>

        <hr />
        <button onClick={this.changeMsgInParent}>Change Message</button>
        <br />
        <ChildOne info={this.state.message} />
      </div>
    );
  }
}
export default ParentOne;
