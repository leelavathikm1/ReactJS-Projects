import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./Components/Login";
import { Dashboard } from "./Components/Dashboard";
import { Register } from "./Components/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Welcome to Router Authentication</h2>

      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
