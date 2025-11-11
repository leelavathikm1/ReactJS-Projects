import { useState } from "react";

import "./App.css";

import MainTwo from "../PracticeTwo/MainTwo";
import Main from "../Components/Main";
import MainComp from "../Practice-1/MainComp";
import MainCompThree from "../Practice-2/MainCompThree";
import MainFour from "../Practice-4/MainFour";
import MainFive from "../Practice-5/MainFive";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <MainTwo /> */}
      {/* <Main /> */}
      {/* <MainComp /> */}
      {/* <MainCompThree /> */}
      {/* <MainFour /> */}
      <MainFive />
    </>
  );
}

export default App;
