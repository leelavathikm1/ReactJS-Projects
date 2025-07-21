import { Component } from "react";
import ChildTwo from "./ChildTwo";

class ParentTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
  }

  recevieDataFromChild = (msg) => {
    console.log("Data FromChild", msg);
    this.setState({ message: msg });
  };
  render() {
    return (
      <div>
        Hi ParentTWo
        <hr />
        <h3>{this.state.message}</h3>
        <ChildTwo getInfo={this.recevieDataFromChild} />
      </div>
    );
  }
}

export default ParentTwo;
