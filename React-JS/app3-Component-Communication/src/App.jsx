import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./Comp-Communication/Parent";
import ParentTwo from "./Comp-Communication/ParentTwo";
import ParentOne from "./Comp-Communication/ParentOne";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Parent /> */}
      {/* <ParentTwo /> */}
      <ParentOne />
    </>
  );
}

export default App;
