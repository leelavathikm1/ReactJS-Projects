import { Component } from "react";

function HocComp(MidComp) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    increase = () => {
      this.setState({ count: this.state.count + 1 });
    };

    decrease = () => {
      this.setState({ count: this.state.count - 1 });
    };

    reset = () => {
      this.setState({ count: 0 });
    };

    render() {
      return (
        <div>
          <MidComp
            increase={this.increase}
            decrease={this.decrease}
            reset={this.reset}
            count={this.state.count}
            {...this.props}
          />
        </div>
      );
    }
  };
}
export default HocComp;
