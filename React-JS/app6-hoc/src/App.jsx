import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClickCounter from "../Components/ClickCounter";
import HoverCounter from "../Components/HoverCounter";
import HocComponent from "../Components/HocComponent";
import ClickTwo from "../Components/ClickTwo";
import HoverTwo from "../Components/HoverTwo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ClickCounter />
      <br />
      <HoverCounter /> */}
      <ClickTwo />
      <br />
      <HoverTwo />
    </>
  );
}

export default App;
