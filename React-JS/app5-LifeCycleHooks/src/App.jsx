import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LifeCycleHooksOne from "../Components/LifeCycleHooksOne";
import LifeCycleDemo from "../Components/LifeCycleDemo";
import LifeCycleParent from "../Components/LifeCycleParent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <LifeCycleHooksOne /> */}
      {/* <LifeCycleDemo age={45} /> */}
      <LifeCycleParent />
    </>
  );
}

export default App;
