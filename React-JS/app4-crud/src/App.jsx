import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserCrud } from "./Components/UserCrud";
import { CrudCar } from "./Components/CrudCar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <UserCrud /> */}
        <CrudCar />
      </div>
    </>
  );
}

export default App;
