import { Component } from "react";

export class CrudCar extends Component {
  constructor() {
    super();
    this.state = {
      car: {
        name: "",
        model: "",
        price: "",
        fuel: "",
        seater: "",
        milage: "",
      },
      cars: [],
    };
  }

  handleChange = (e) => {
    const inputName = e.target.name;
    const enteredValue = e.target.value;
    const newCar = { ...this.state.car };
    newCar[inputName] = enteredValue;
    this.setState({ user: newCar });
    // this.setState({ [inputName]: enteredValue });
    // const newCar={...this.state.car}

    // console.log(e);
    console.log(inputName);
    console.log(enteredValue);
  };

  handleSubmit = () => {
    this.setState();
  };

  render() {
    const { name, model, price, seater, fuel, milage } = this.state.car;
    return (
      <div>
        <h2>CrudCars Component</h2>
        <form>
          <label htmlFor="name">Car Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="model">Model </label>
          <br />
          <input
            type="text"
            name="model"
            value={model}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="price">Price </label>
          <br />
          <input
            type="number"
            name="price"
            value={price}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="fuel">Fuel </label>
          <br />
          <input
            type="text"
            name="fuel"
            value={fuel}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="seater">Seater </label>
          <br />
          <input
            type="text"
            name="seater"
            value={seater}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="milage">Milage </label>
          <br />
          <input
            type="text"
            name="milage"
            value={milage}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button type="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
