import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./Components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Welcome to Router Authentication</h2>

      <BrowserRouter>
        <Routes>
          <Route path="login" element={Login} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
