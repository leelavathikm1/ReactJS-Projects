import { Component } from "react";
import ChildTwo from "./ChildTwo";

class ParentTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };
  }

  receiveDataFromChild = (msg) => {
    console.log("DataFrom Chi;d", msg);
  };

  render() {
    return (
      <div>
        Hi ParentTWo
        <hr />
        <ChildTwo getInfo={this.receiveDataFromChild} />
      </div>
    );
  }
}

export default ParentTwo;
