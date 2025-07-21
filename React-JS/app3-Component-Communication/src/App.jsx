import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./Comp-Communication/Parent";
import ParentTwo from "./Comp-Communication/ParentTwo";
import ParentOne from "./Comp-Communication/ParentOne";
import SiblingsComp from "./Comp-Communication/SiblingsComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Parent /> */}
      {/* <ParentTwo /> */}
      {/* <ParentOne /> */}
      <SiblingsComp />
    </>
  );
}

export default App;
