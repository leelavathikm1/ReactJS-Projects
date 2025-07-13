import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MuraliClassComp from "./Components/MuraliClassComp";
import UserClassComp from "./Components/UserClassComp";
import StudentClassComp from "./Components/StudentClassComp";
import Toggle from "./Components/Toggle";
import Task1Toggle from "./Components/Task1-Toggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {
        /* <MuraliClassComp /> */
        // <UserClassComp />
        // <Toggle />
        // <StudentClassComp />
        <Task1Toggle />
      }
    </div>
  );
}

export default App;
