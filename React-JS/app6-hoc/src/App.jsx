import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClickCounter from "../Components/ClickCounter";
import HoverCounter from "../Components/HoverCounter";
import ClickTwo from "../Components/ClickTwo";
import HoverTwo from "../Components/HoverTwo";
import ClickComponent from "../Practice-1/ClickComponent";
import HoverComponent from "../Practice-1/HoverComponent";
import ClickComp from "../Practice-2/ClickComp";
import HoverComp from "../Practice-2/HoverComp";
import ClickCompFive from "../Practice-3/ClickCompFive";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ClickCounter />
      <br />
      <HoverCounter /> */}
      {/* <ClickTwo />
      <br />
      <HoverTwo /> */}
      {/* <ClickComponent />
      <hr />
      <HoverComponent /> */}

      {/* <ClickComp />
      <hr />
      <HoverComp /> */}
      <ClickCompFive />
    </>
  );
}

export default App;
