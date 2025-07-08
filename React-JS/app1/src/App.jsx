import { useState } from "react";

import "./App.css";
import ClassBasedComp from "./COMPONENTS/Class-Based-Comp";
import ClassTwoBaseComp from "./COMPONENTS/ClassTwoBase-Comp";
import ClassThreeComp from "./COMPONENTS/ClassThree-Comp";
import ClassFourComp from "./COMPONENTS/ClassFour-Comp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello Welcome To ReactJs</h1>
      <ClassBasedComp />
      <ClassTwoBaseComp />
      <ClassThreeComp />
      <ClassFourComp />
    </div>
  );
}

export default App;
