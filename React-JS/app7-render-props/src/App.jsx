import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RenderParent from "../Components/RenderParent";
import RenderChild from "../Components/RenderChild";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RenderParent />
      <hr />
      <RenderChild />
    </div>
  );
}

export default App;
