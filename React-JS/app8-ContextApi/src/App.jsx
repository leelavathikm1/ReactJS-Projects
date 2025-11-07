import { useState } from "react";

import "./App.css";

import MainTwo from "../PracticeTwo/MainTwo";
import Main from "../Components/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <MainTwo /> */}
      <Main />
    </>
  );
}

export default App;
