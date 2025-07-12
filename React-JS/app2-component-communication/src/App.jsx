import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MuraliClassComp from "./Components/MuraliClassComp";
import UserClassComp from "./Components/UserClassComp";
import StudentClassComp from "./Components/StudentClassComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {
        /* <MuraliClassComp /> */
        // <UserClassComp />

        <StudentClassComp />
      }
    </div>
  );
}

export default App;
